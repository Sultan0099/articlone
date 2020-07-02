import * as dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import bodyParser from "body-parser";
import morgan from 'morgan';

import dbConnection from "./config/db";

// SECTION  Setting up database 
dbConnection();

import * as routes from './routes';

const app: Application = express();
const PORT = 3001 || process.env.PORT;

// SECTION middleware 
if (process.env.NODE_ENV != 'production') {
    app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// SECTION : ROUTES 
app.use('/api/v1', routes.auth);


app.listen(PORT, () => console.log(`server is up and running at :\nhttp://localhost:${PORT}`));