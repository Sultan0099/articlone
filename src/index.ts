import * as dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import bodyParser from "body-parser";
import morgan from 'morgan';
import session from 'express-session';
import connectMongo from "connect-mongo";
import passport from "passport";


import dbConnection from "./config/db";
import keys from "./config/keys";
import { ExpressRequest, ExpressResponse, ExpressError, ExpressNextFunction } from "./types";

// SECTION  Setting up database 
dbConnection();

import * as routes from './routes';

const app: Application = express();
const PORT = 3001 || process.env.PORT;

const MongoStore = connectMongo(session);


// SECTION middleware 
if (process.env.NODE_ENV != 'production') {
    app.use(morgan('dev'));
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ url: keys.MONGO_URI, mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true } }),
    cookie: {
        maxAge: 900000
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