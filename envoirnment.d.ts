import { IProfile } from "./src/types";
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            MAILGUN_API_KEY: string,
            MAILGUN_DOMAIN: string,
            MONGO_URI: string,
            JWT_SECRET: string,
            JWT_ACC_ACTIVE: string,
            SESSION_SECRET: string,
            MONGO_URI_SESSION_STORE: string,
            JWT_FORGET_PASS: string,
            JWT_ISSUER: string,
            CLIENT_ORIGIN: string,
            ARTICLONE_MAIL: string,
            ARTICLONE_PASS: string,
            GOOGLE_CLIENT_ID: string,
            GOOGLE_CLIENT_SECRET: string,
            GOOGLE_CALLBACK: string,
        }
    };

    namespace Express {
        interface Request {
            session: any,
            user: { email: string, username: string, _id: string, isActive: boolean, token: string, profile: IProfile },
            sessionStore: string,
            sessionID: string,
            session: string
        }
    }
}


// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }