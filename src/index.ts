import * as dotenv from 'dotenv';

import express, { Application } from 'express';
import bodyParser from "body-parser";
import morgan from 'morgan';
import session from 'express-session';
import passport from "passport";
import connectMongo from "connect-mongo";

import db from "./config/db";
import keys from "./config/keys";
import { ExpressRequest, ExpressResponse, ExpressError, ExpressNextFunction } from "./types";
import "./config/passport";
import * as routes from './routes';

if (process.env.NODE_ENV != "production") {
    dotenv.config();
}

const app: Application = express();
const PORT = 3001 || process.env.PORT;


// SECTION  Setting up database 
db.dbConnection().then(() => console.log("database is connected")).catch(err => console.log(err));
const MongoStore = connectMongo(session);
const sessionStore = new MongoStore({ mongooseConnection: db.sessionDbConnection(), collection: "articlone-session" });


// SECTION middleware 
if (process.env.NODE_ENV != 'production') {
    app.use(morgan('dev'));
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(session({
    secret: keys.SESSION_SECRET,
    resave: false,
    rolling: true,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        secure: process.env.NODE_ENV == 'production' ? true : false,
        maxAge: 1000 * 60 * 60 * 12
    }
}));

app.use(passport.initialize());
app.use(passport.session());


// SECTION : ROUTES 
app.use('/api/v1', routes.auth);

// SECTION Error handler
app.use((err: ExpressError, req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => {
    res.status(err.status || 500).json({ success: false, error: { status: err.status || 500, message: err.message } })
})


app.listen(PORT, () => console.log(`server is up and running at :\nhttp://localhost:${PORT}`));