import createError from "http-errors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import passport from "passport";

import { User, Token } from "../models";
import { AuthControllerType } from "../types";
import { authValidator, EmailService, encrypt } from "../utils";
import "../config/passport";  //  importing passport configuration from config folder ;
import keys from "../config/keys";


const emailService = new EmailService();

const authController: AuthControllerType = {
    // SECTION  Register Controller 
    register: async (req, res, next) => {
        try {
            const { username, email, password, confirmPassword } = req.body;

            const result = await authValidator.registerValidator.validateAsync({ username, email, password, confirmPassword });
            if (result) {

                const user = await User.create({ username: result.username, email: result.email, password: result.password });

                const emailVerificationToken = await encrypt.assignEmailActivationToken({ payload: user._id });
                if (emailVerificationToken) await Token.create({ userId: user._id, token: emailVerificationToken });

                const emailContent = `
                <h1> Email Verification</h1>
                <a href="${keys.CLIENT_ORIGIN}verify-email/${emailVerificationToken}"> click here to active your account </a>
                `;

                await emailService.sendMailFromGmail(user.email, "Email Verification", emailContent);
                res.status(200).json({ success: true, msg: "Sign up successful" })
            }


        } catch (err) {
            next(createError(403, err));
        }
    },
    // SECTION : Email Verification 
    emailConfirm: async (req, res, next) => {
        try {
            const { token } = req.body;
            const tokenData = await Token.findOne({ token });

            if (!tokenData) return next(createError(400, "Invalid/Expire Token"));

            await encrypt.verifyEmailActivationToken(token);

            const user = await User.findOne({ _id: tokenData.userId });

            if (!user) return next(createError(404, 'user not found : Register first'));

            if (user.isVerified) return next(createError(403, "Your email is already verified : Try Login"));

            user.isVerified = true;
            user.isActive = true;
            await user.updateOne(user);

            await tokenData.deleteOne()

            const jwtToken = await encrypt.assignUserToken({ payload: user._id })

            res.status(200).json({ success: true, data: { jwtToken, user: { email: user.email, username: user.username, _id: user.id, isActive: user.isActive } } })

        } catch (err) {
            next(createError(403, "Email verification error : try resend mail"));
        }
    },
    // SECTION  Resend confirmation Email
    resend: async (req, res, next) => {
        try {
            const { email } = req.body;

            const user = await User.findOne({ email });
            if (!user) return next(createError(400, "Email does not  exist : Try Registration"))

            if (user.isVerified) return next(createError(403, 'Email is already verified'));

            const token = await Token.findOne({ userId: user._id });
            const emailVerificationToken = await encrypt.assignEmailActivationToken({ payload: user._id });

            if (token) {
                token.token = emailVerificationToken;
                await token.updateOne(token);
            } else {
                await Token.create({ userId: user._id, token: emailVerificationToken });
            }

            const emailContent = `
            <h1> Email Verification</h1>
            <a href="${keys.CLIENT_ORIGIN}verify-email/${emailVerificationToken}"> click here to active your account </a>
            `;
            await emailService.sendMailFromGmail(user.email, "Email Verification", emailContent);

            res.status(200).json({ success: true, data: { msg: 'Email sent Successfully' } })
        } catch (err) {

            const errMsg: string = err.message.split(':').pop();
            return next(createError(403, errMsg));
        }
    },

    // SECTION : Login Controller 
    login: async (req, res, next) => {
        try {
            passport.authenticate('local', async (err, user, info) => {
                if (err) {
                    return next(createError(401, err));
                }
                if (!user) { return next(createError(404, "user not found")) }
                const { _id, email, username, isActive } = user;
                const jwtToken = await encrypt.assignUserToken({ payload: _id })

                res.status(200).json({ success: true, data: { jwtToken, user: { _id, email, username, isActive } } });
            })(req, res, next);


        } catch (err) {
            return next(createError(403, err))
        }
    },
    // SECTION Logout
    logout: async (req, res, next) => {
        try {
            if (req.user) { req.logout(); }

            const { userId } = req.body;
            if (!mongoose.isValidObjectId(userId)) return next(createError(400, 'Invalid UserId '))

            const user = await User.findOne({ _id: userId });

            if (user) {

                user.isActive = false;
                await user.updateOne(user);

                res.status(200).json({ success: true, data: { msg: "logout successfully" } });
            } else {
                next(createError(404, `user not found `))
            }
        } catch (err) {
            const errMsg: string = err.message;
            return next(createError(403, errMsg))
        }

    },
    // SECTION Get Login user
    getLogInUser: async (req, res, next) => {
        try {
            const user = req.user;

            if (user) {
                const { email, username, isActive, _id, profile } = user;
                const token = await encrypt.assignUserToken({ payload: _id })
                return res.status(200).json({ success: true, data: { jwtToken: token, user: { email, username, isActive, _id, profile } } })
            } else {
                return next(createError(401, "Please Login"))
            }
        } catch (err) {
            return next(createError(401, "Please Login"))
        }
    },

    forgetPassword: async (req, res, next) => {
        try {
            const { usernameOrEmail } = req.body;
            const user = await User.findOne().or([{ email: usernameOrEmail }, { username: usernameOrEmail }]);
            if (!user) {
                return next(createError(401, "Email/Username not found : Try Register yourself"))
            } else {
                // TODO : assign token 
                const forgetPasswordToken = await encrypt.assignForgetPasswordToken({ payload: user._id })
                // TODO : save token 
                if (forgetPasswordToken) {
                    await Token.create({ userId: user._id, token: forgetPasswordToken });
                    // TODO : send mail to user 
                    const emailContent = `
                    <h1> Forget Password </h1>
                    <a href="${keys.CLIENT_ORIGIN}reset-password/${forgetPasswordToken}"> click here to change password </a>
                    
                    `;
                    await emailService.sendMailFromGmail(user.email, "Forget Password", emailContent);
                    res.status(200).json({ success: true, msg: "Email send successfully" })
                }
            }
        } catch (err) {
            next(createError(403, err))
        }
    },
    resetPassword: async (req, res, next) => {
        try {
            const { token, password, confirmPassword } = req.body;
            const tokenData = await Token.findOne({ token });

            if (!tokenData) return next(createError(400, "Invalid/Expire Token"));

            await encrypt.verifyForgetPasswordToken(token);

            const result = await authValidator.resetPassword.validateAsync({ password, confirmPassword });
            if (result) {

                const user = await User.findOne({ _id: tokenData.userId });

                if (!user) return next(createError(404, 'user not found : Register first'));
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(password, salt);
                user.password = hash;

                await user.updateOne(user);

                await tokenData.deleteOne()
                res.status(200).json({ success: true, data: {} })
            }
            // res.status(200).json({ success: true, data: { user: { email: user.email, username: user.username, _id: user.id, isActive: user.isActive } } })

        } catch (err) {
            next(createError(403, err));
        }
    },

    googleAuth: async (req, res, next) => {
        try {
            passport.authenticate('google', async (err, user, info) => {
                if (err) {
                    return next(createError(401, err));
                }
                if (!user) { return next(createError(404, "user not found")) }
                if (!user.isVerified) {
                    return res.redirect(`${keys.CLIENT_ORIGIN}signup/check_email/${user.email}`)
                }

                const token = await encrypt.assignUserToken({ payload: user._id })

                return res.redirect(`${keys.CLIENT_ORIGIN}?token=${token}`)
            })(req, res, next);


        } catch (err) {
            return next(createError(403, err))
        }
    }
}


export default authController; 