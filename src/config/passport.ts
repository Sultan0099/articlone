import passport from 'passport';
import passportLocal from "passport-local";

import { User } from '../models';


const LocalStrategy = passportLocal.Strategy;



passport.use(new LocalStrategy({ usernameField: "usernameOrEmail" }, async (usernameOrEmail: string, password: string, done) => {
    try {
        console.log("passport ", usernameOrEmail)
        const user = await User.findOne().or([{ email: usernameOrEmail }, { username: usernameOrEmail }]);
        if (!user) {
            return done(null, false, { message: `Email ${usernameOrEmail} not found.` })
        }

        if (user) {

            if (!user.isVerified) { return done(null, false, { message: "Please verify your email" }) }
            const isValidPassword = await user.isValidPassword(password);

            if (!isValidPassword) { return done(null, false, { message: "Invalid username/email or password" }) }

            user.isActive = true;
            await user.updateOne(user);
            return done(null, user);
        }

    } catch (err) {
        throw new Error(err)
    }
}));


passport.serializeUser<any, any>((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, async (err, dbUser) => {
        done(err, dbUser);
    });
});
