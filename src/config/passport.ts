import passport from 'passport';
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";

import keys from "./keys";

import { User, Token } from '../models';
import { ExpressRequest } from '../types';
import console from 'console';
import { encrypt, EmailService } from '../utils';

// SECTION Passport local strategy

const emailService = new EmailService();
const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy({ usernameField: "usernameOrEmail" }, async (usernameOrEmail: string, password: string, done) => {
    try {
        console.log("passport ", usernameOrEmail)
        const user = await User.findOne().or([{ email: usernameOrEmail }, { username: usernameOrEmail }]);
        if (!user) {
            return done("user not found", false, { message: `Email ${usernameOrEmail} not found.` })
        }


        if (!user.isVerified) {
            const emailVerificationToken = await encrypt.assignEmailActivationToken({ payload: user._id });
            if (emailVerificationToken) await Token.create({ userId: user._id, token: emailVerificationToken });

            const emailContent = `
                        <h1> Email Verification</h1>
                        <a href="${keys.CLIENT_ORIGIN}verify-email/${emailVerificationToken}"> click here to active your account </a>
                        `;

            await emailService.sendMail(user.email, "Email Verification", emailContent);
            return done("user is not verified", false, { message: "Please verify your email" })
        }
        const isValidPassword = await user.isValidPassword(password);

        if (!isValidPassword) { return done("password is not valid", user, { message: "Invalid username/email or password" }) }

        user.isActive = true;
        await user.updateOne(user);
        return done(null, user);


    } catch (err) {
        return done(err, false)
    }
}));


// SECTION passport jwt strategy 
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

let options = {
    secretOrKey: keys.JWT_SECRET,
    issuer: keys.JWT_ISSUER,
    jwtFromRequest: (req: ExpressRequest<any>) => {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        }
        return null;
    }
}


passport.use(new JwtStrategy(options, async (jwt, done) => {
    try {
        const user = await User.findOne({ _id: jwt.payload });
        if (!user) return done(null, false);
        if (!user.isActive) {
            user.isActive = true
            await user.updateOne(user);
        }
        done(null, user)

    } catch (err) {
        done(null, false)
    }

}))


passport.serializeUser<any, any>((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, async (err, dbUser) => {
        done(err, dbUser);
    });
});
