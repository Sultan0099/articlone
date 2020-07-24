import passport from 'passport';
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";
import passportGoogle from "passport-google-oauth20";
import bcrypt from 'bcrypt';

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

            await emailService.sendMailFromGmail(user.email, "Email Verification", emailContent);
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


// SECTION PASSPORT GOOGLE AUTH STRATEGY
const GoogleStrategy = passportGoogle.Strategy;
passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/api/v1/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, done) {
        try {
            if (profile) {
                const { email, name, picture, email_verified, sub, given_name } = profile._json;
                const user = await User.findOne({ email });
                if (!user) {
                    const username: string = given_name + sub;
                    const salt = await bcrypt.genSalt(10);
                    const hash = await bcrypt.hash(given_name + sub + ((Math.random() * 999) + 1000), salt);
                    const password = hash;
                    const createdUser = await User.create({ email, username, password });

                    const emailVerificationToken = await encrypt.assignEmailActivationToken({ payload: createdUser._id });
                    if (emailVerificationToken) await Token.create({ userId: createdUser._id, token: emailVerificationToken });

                    const emailContent = `
                                    <h1> Email Verification</h1>
                                    <a href="${keys.CLIENT_ORIGIN}verify-email/${emailVerificationToken}"> click here to active your account </a>
                                    `;

                    await emailService.sendMailFromGmail(createdUser.email, "Email Verification", emailContent);
                    return done(undefined, createdUser)

                } else {
                    return done(undefined, user);
                }
            } else {
                done("profile not found", false)
            }


        } catch (err) {
            done(err, false);
        }

    }
));


passport.serializeUser<any, any>((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, async (err, dbUser) => {
        done(err, dbUser);
    });
});
