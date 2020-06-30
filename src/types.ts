import mongoose from "mongoose";
import { Request, Response } from 'express';


export type UserType = {
    username: string,
    email: string,
    password: string,
}

export type RegisterType = UserType;
export type LoginType = {
    usernameOrEmail: string,
    password: string,
}

export type UserErrType = {
    username?: string,
    email?: string,
    password?: string
}


export type AuthControllerType = {
    register: (req: ExpressRequest<RegisterType>, res: ExpressResponse) => {},
    login: (req: ExpressRequest<LoginType>, res: ExpressResponse) => {},
}

export interface IUser extends mongoose.Document {
    username: string,
    email: string,
    password: string,
}


export type ExpressResponse = Response;

export interface ExpressRequest<T> extends Request {
    body: T
}