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

export type EmailConfirmType = {
    token: string
}

export type ExpressResponse = Response;

export interface ExpressRequest<T> extends Request {
    body: T
}

export type AuthControllerType = {
    register: (req: ExpressRequest<RegisterType>, res: ExpressResponse) => {},
    login: (req: ExpressRequest<LoginType>, res: ExpressResponse) => {},
    emailConfirm: (req: ExpressRequest<EmailConfirmType>, res: ExpressResponse) => {}
}

export interface IUser extends mongoose.Document {
    username: string,
    email: string,
    password: string,
}


export type KeysType = {
    MONGO_URI: string,
    JWT_SECRET: string,
    mailgunOptions: {
        api_key: string,
        domain: string,
    }
}