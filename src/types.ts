import mongoose from "mongoose";
import { Request, Response, NextFunction } from 'express';


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

export type EmailConfirmType = { token: string }
export type ResendMailType = { email: string }

export type ExpressResponse = Response;
export type ExpressNextFunction = NextFunction;

export interface ExpressRequest<T> extends Request {
    body: T;
}

export type AuthControllerType = {
    register: (req: ExpressRequest<RegisterType>, res: ExpressResponse) => {},
    login: (req: ExpressRequest<LoginType>, res: ExpressResponse) => {},
    emailConfirm: (req: ExpressRequest<EmailConfirmType>, res: ExpressResponse) => {}
    resend: (req: ExpressRequest<ResendMailType>, res: ExpressResponse) => {},
    logout: (req: ExpressRequest<any>, res: ExpressResponse) => {},
    getLogInUser: (req: ExpressRequest<any>, res: ExpressResponse) => {}
}

export interface IUser extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    isVerified?: boolean;
    isActive?: boolean;
    isValidPassword: (password: string) => boolean;
}

export interface IUserSchema extends mongoose.Schema {
    username: string,
    email: string,
    password: string,
    isVerified?: boolean,
    isActive?: boolean,
}

export interface IToken extends mongoose.Document {
    userId: string,
    token: string
}


export type JWTType = {
    payload: string,
    iat: number,
    exp: number,
    iss: string

}
