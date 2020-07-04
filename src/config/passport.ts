import passport from 'passport';
import passportLocal from "passport-local";

import { User } from '../models';

import { encrypt } from "../utils";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, async (err, dbUser) => {
        done(err, dbUser);
    });
});



passport.use(new LocalStrategy({ usernameField: "usernameOrEmail" }, async (usernameOrEmail: string, password: string, done) => {
    try {
        const user = await User.findOne().or([{ email: usernameOrEmail }, { username: usernameOrEmail }]);
        if (!user) {
            return done(null, false, { message: `Email ${usernameOrEmail} not found.` })
        }

        if (user) {

            if (!user.isVerified) { return done(null, false, { message: "Please verify your email" }) }
            const isValidPassword = await user.isValidPassword(password);

            if (!isValidPassword) { return done(null, false, { message: "Invalid username/email or password" }) }

            done(null, user);

        }

    } catch (err) {
        throw new Error(err)
    }


}));

