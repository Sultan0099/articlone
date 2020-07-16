import mongoose from "mongoose";
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

// SECTION : Express Types 👇

export type ExpressResponse = Response;
export type ExpressNextFunction = NextFunction;

export interface ExpressRequest<T> extends Request {
    body: T;
}

export interface ExpressError extends ErrorRequestHandler {
    status: number,
    message: string

}

// SECTION : Mongoose models types 👇
export interface IUser extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    isVerified?: boolean;
    isActive?: boolean;
    isValidPassword: (password: string) => boolean;
}



export interface IToken extends mongoose.Document {
    userId: string,
    token: string
}


export type UserType = {
    username: string,
    email: string,
    password: string,
}

// SECTION : Auth Controller types 👇

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
export type UserLogoutType = { userId: string }
export type ForgetPasswordType = { usernameOrEmail: string };
export type resetPasswordType = { token: string, password: string };

export type AuthControllerType = {
    register: (req: ExpressRequest<RegisterType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    login: (req: ExpressRequest<LoginType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    emailConfirm: (req: ExpressRequest<EmailConfirmType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    resend: (req: ExpressRequest<ResendMailType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    logout: (req: ExpressRequest<UserLogoutType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    getLogInUser: (req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => void;
    forgetPassword: (req: ExpressRequest<ForgetPasswordType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    resetPassword: (req: ExpressRequest<resetPasswordType>, res: ExpressResponse, next: ExpressNextFunction) => void;
}



export type JWTType = {
    payload: string,
    iat: number,
    exp: number,
    iss: string

}

export type JWOptions = {
    jwtFromRequest?: any,
    secretOrKey?: string,
    issuer?: string,
    audience?: string,
}