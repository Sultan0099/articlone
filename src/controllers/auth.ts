import createError from "http-errors";
import mongoose from "mongoose";

import { User, Token } from "../models";
import { AuthControllerType } from "../types";
import { authValidator, EmailService, encrypt } from "../utils";


const emailService = new EmailService();

const authController: AuthControllerType = {
    // SECTION  Register Controller 
    register: async (req, res, next) => {
        try {
            const { username, email, password } = req.body;

            const result = await authValidator.registerValidator.validateAsync({ username, email, password });
            if (result) {

                const user = await User.create({ username: result.username, email: result.email, password: result.password });

                const emailVerificationToken = await encrypt.assignEmailActivationToken({ payload: user._id });
                if (emailVerificationToken) await Token.create({ userId: user._id, token: emailVerificationToken });

                const emailContent = `
                <h1> Email Verification</h1>
                <p>${emailVerificationToken}</p>
                `;
                await emailService.sendMail(user.email, "Email Verification", emailContent);
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
            req.login(user, (err) => {
                if (err) { return next(createError(401, "Error : try Login")) };
                return res.status(200).json({ success: true, data: { msg: 'email confirmed successful' } })
            });
            // res.status(200).json({ success: true, data: { user: { email: user.email, username: user.username, _id: user.id, isActive: user.isActive } } })

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
            <p>${emailVerificationToken}</p>
            `;
            await emailService.sendMail(user.email, "Email Verification", emailContent);

            res.status(200).json({ success: true, data: { msg: 'Email sent Successfully' } })
        } catch (err) {

            const errMsg: string = err.message.split(':').pop();
            return next(createError(403, errMsg));
        }
    },

    // SECTION : Login Controller 
    login: async (req, res, next) => {
        try {
            res.status(200).json({ success: true, data: { msg: "login successful" } })
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
            console.log(req.user);

            if (user) {
                const { email, username, isActive, _id } = user;
                const token = await encrypt.assignUserToken({ payload: _id })
                return res.status(200).json({ success: true, data: { user: { email, username, isActive, _id, token } } })
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
                return next(createError(401, "Email/Username not found"))
            } else {
                // TODO : assign token 
                const forgetPasswordToken = await encrypt.assignForgetPasswordToken({ payload: user._id })
                // TODO : save token 
                if (forgetPasswordToken) {
                    await Token.create({ userId: user._id, token: forgetPasswordToken });
                    // TODO : send mail to user 
                    const emailContent = `
                    <h1> Forget Password </h1>
                    <p>${forgetPasswordToken}</p>
                    `;
                    await emailService.sendMail(user.email, "Forget Password", emailContent);
                    res.status(200).json({ success: true, msg: "Email send successfully" })
                }
            }
        } catch (err) {
            next(createError(403, err))
        }
    }
}


export default authController; 