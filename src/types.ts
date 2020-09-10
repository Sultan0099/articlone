import mongoose from "mongoose";
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

// SECTION : Express Types 👇

export type ExpressResponse = Response;
export type ExpressNextFunction = NextFunction;

export interface ExpressRequest<T> extends Request {
    body: T;
}

export interface ExpressRequestWithParams<T> extends Request {
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
    profile?: IProfile | string;
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

export type RegisterType = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
};
export type LoginType = {
    usernameOrEmail: string,
    password: string,
}

export type UserErrType = {
    username?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
}

export type EmailConfirmType = { token: string }
export type ResendMailType = { email: string }
export type UserLogoutType = { userId: string }
export type ForgetPasswordType = { usernameOrEmail: string };
export type resetPasswordType = { token: string, password: string, confirmPassword: string };

export type AuthControllerType = {
    register: (req: ExpressRequest<RegisterType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    login: (req: ExpressRequest<LoginType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    emailConfirm: (req: ExpressRequest<EmailConfirmType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    resend: (req: ExpressRequest<ResendMailType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    logout: (req: ExpressRequest<UserLogoutType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    getLogInUser: (req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => void;
    forgetPassword: (req: ExpressRequest<ForgetPasswordType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    resetPassword: (req: ExpressRequest<resetPasswordType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    googleAuth: (req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => void;
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


// SECTION : Profile Controller types 👇

export interface IProfile extends mongoose.Document {
    user: IUser | string;
    firstName?: string;
    lastName?: string;
    purposeToJoin?: string;
    profileImg?: string;

}

export type ProfileType = {
    firstName: string;
    lastName: string;
    purposeToJoin: string;
}

export type ProfileErrType = {

    firstName?: string;
    lastName?: string;
    purposeToJoin?: string;
    profileImg?: string;
}




export type ProfileControllerType = {
    create: (req: ExpressRequest<ProfileType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    uploadProfileImg: (req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => void;
    update: (req: ExpressRequest<ProfileType>, res: ExpressResponse, next: ExpressNextFunction) => void;
};


// ******************************
// Section Collection types 👇
// ******************************


export interface ICollections extends mongoose.Document {
    user: IUser | string,
    title?: string,
    description?: string,
    collectionImg?: string,
}

export type collectionType = {
    id?: string,
    user: string,
    title: string,
    description: string
}

export type CollectionsErrType = {
    user: string,
    title: string,
    description: string
}



export type collectionControllerType = {
    getAllPost: (req: ExpressRequest<null>, res: ExpressResponse, next: ExpressNextFunction) => void;
    getSingle: (req: ExpressRequest<null>, res: ExpressResponse, next: ExpressNextFunction) => void;
    create: (req: ExpressRequest<collectionType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    delete: (req: ExpressRequest<null>, res: ExpressResponse, next: ExpressNextFunction) => void;
    update: (req: ExpressRequest<collectionType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    uploadCollectionImg: (req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => void;
    getVisitedUsers: (req: ExpressRequest<null>, res: ExpressResponse, next: ExpressNextFunction) => void;
}

// ******************************
// Section Posts types 👇
// ******************************

export interface IPost extends mongoose.Document {
    _doc?: IPost;
    collectionId: string | ICollections;
    title: string;
    description: string;
    body: string;
    handler: string | IUser;
    titleImg?: string;
    state?: string;

}



export type PostType = {
    postId: string,
    collectionId: string;
    title: string;
    description: string;
    body: string;
    state: string;
    titleImg: string;
}

export type PostControllerType = {
    getAllPost: (req: ExpressRequest<PostType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    getSingle: (req: ExpressRequest<PostType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    create: (req: ExpressRequest<PostType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    delete: (req: ExpressRequest<null>, res: ExpressResponse, next: ExpressNextFunction) => void;
    update: (req: ExpressRequest<PostType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    pagination: (req: ExpressRequest<PostType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    uploadContentImgs: (req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => void;
    uploadTitleImg: (req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => void;
}

// ******************************
// Section cms types 👇
// ******************************

export interface ICMS extends mongoose.Document {
    collectionId: string | ICollections,
    apiKey: string
}

export interface ICmsUser extends mongoose.Document {
    cmsId: string | ICMS;
    collectionId: string | ICollections;
    name: string;
    email: string;
    password: string;
    isValidPassword: (password: string) => boolean;
}

export type CmsUserType = {
    cmsId: string;
    collectionId: string;
    name: string;
    email: string;
    password: string;
}

export type CmsControllerType = {
    getPosts: (req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => void;
    getSinglePost: (req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => void;
    likePost: (req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => void;
    commentPost: (req: ExpressRequest<any>, res: ExpressResponse, next: ExpressNextFunction) => void;
    login: (req: ExpressRequest<CmsUserType>, res: ExpressResponse, next: ExpressNextFunction) => void;
    register: (req: ExpressRequest<CmsUserType>, res: ExpressResponse, next: ExpressNextFunction) => void;
}