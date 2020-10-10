import { IProfile } from "./src/types";
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production' | 'test';
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
            FIREBASE_API: string,
            FIREBASE_AUTH_DOMAIN: string,
            FIREBASE_DATABASE: string,
            FIREBASE_PROJECT_ID: string,
            FIREBASE_STORAGE: string,
            FIREBASE_MESSAGE: string,
            FIREBASE_APP_ID: string
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

    declare module "*.json" {
        const value: any;
        export default value;
    }
}


// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }