import { User, Token } from "../models";
import { AuthControllerType } from "../types";
import { registerValidator, EmailService, encrypt } from "../utils";

const emailService = new EmailService();

const authController: AuthControllerType = {
    // SECTION  Register Controller 
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;


            const { isValid, errors } = registerValidator(username, email, password);

            if (!isValid) {
                return res.status(400).json({ success: false, errors });
            }

            const user = await User.create({ username, email, password });

            const emailVerificationToken = await encrypt.assignEmailActivationToken({ payload: user._id });
            if (emailVerificationToken) await Token.create({ userId: user._id, token: emailVerificationToken });

            const emailContent = `
            <h1> Email Verification</h1>
            <p>${emailVerificationToken}</p>
            `;
            await emailService.sendMail(user.email, "Email Verification", emailContent);


            res.status(200).json({ success: true, msg: "Sign up successful" })
        } catch (err) {
            if (err.message !== undefined) /* Checking if err consist of message property */ {
                const errMsg: string = err.message.split(':').pop();
                return res.status(403).json({ success: false, errors: { err: errMsg } })
            } else {
                return res.status(500).json({ success: false, errors: { err: "Unknown Error occurred please try again" } });
            }
        }
    },
    // SECTION : Email Verification 
    emailConfirm: async (req, res) => {
        try {
            const { token } = req.body;
            const tokenData = await Token.findOne({ token });

            if (!tokenData) return res.status(400).json({ success: false, errors: { err: "Invalid/Expire token" } });

            await encrypt.verifyEmailActivationToken(token);

            const user = await User.findOne({ _id: tokenData.userId });

            if (!user) return res.status(400).json({ success: false, errors: { err: "User not found Try Again" } });

            if (user.isVerified) return res.status(403).json({ success: false, errors: { err: "your email is already verified : Try Login" } });

            user.isVerified = true;
            user.isActive = true;
            await user.updateOne(user);

            await tokenData.deleteOne()
            req.login(user, (err) => {
                if (err) { return res.status(401).json({ success: false, errors: { err } }) };
                return res.status(200).json({ success: true, data: { msg: 'email confirmed successful' } })
            });
            // res.status(200).json({ success: true, data: { user: { email: user.email, username: user.username, _id: user.id, isActive: user.isActive } } })

        } catch (err) {
            if (err.message !== undefined) /* Checking if err consist of message property */ {
                const errMsg: string = err.message.split(':').pop();
                return res.status(403).json({ success: false, errors: { err: errMsg } })
            } else {
                return res.status(500).json({ success: false, errors: { err: "Unknown Error occurred please try again" } });
            }
        }
    },
    // SECTION  Resend confirmation Email
    resend: async (req, res) => {
        try {
            const { email } = req.body;

            const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ success: false, errors: { err: "Email does't  exist : Try Registration" } });

            if (user.isVerified) return res.status(403).json({ success: false, errors: { err: 'Email is already verified' } })

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
            if (err.message !== undefined) /* Checking if err consist of message property */ {
                const errMsg: string = err.message.split(':').pop();
                return res.status(403).json({ success: false, errors: { err: errMsg } })
            } else {
                return res.status(500).json({ success: false, errors: { err: "Unknown Error occurred please try again" } });
            }
        }
    },

    // SECTION : Login Controller 
    login: async (req, res) => {
        try {
            const logInUser = req.user;
            if (!logInUser) return res.status(403).json({ success: false, errors: { err: 'please login in' } });

            const user = await User.findOne({ _id: logInUser._id });

            if (user) {
                user.isActive = true;
                await user.updateOne(user);
                return res.status(200).json({ success: true, data: { msg: "Sign in Successful" } })
            } else {
                return res.status(403).json({ success: false, errors: { err: "Please Log in" } })
            }
        } catch (err) {
            if (err.message !== undefined) /* Checking if err consist of message property */ {
                const errMsg: string = err.message.split(':').pop();
                return res.status(403).json({ success: false, errors: { err: errMsg } })
            } else {
                return res.status(500).json({ success: false, errors: { err: "Unknown Error occurred please try again" } });
            }
        }
    },
    // SECTION Logout
    logout: async (req, res) => {
        try {
            const logInUser = req.user;
            if (!logInUser) return res.status(403).json({ success: false, errors: { err: 'please login in' } });

            const user = await User.findOne({ _id: logInUser._id });

            if (user) {

                user.isActive = false;
                await user.updateOne(user);
                req.logout();
                return res.status(200).json({ success: true, data: { msg: 'logout successful' } })
            } else {
                res.status(403).json({ success: false, errors: { err: "Please log in" } });
            }


        } catch (err) {
            if (err.message !== undefined) /* Checking if err consist of message property */ {
                const errMsg: string = err.message.split(':').pop();
                return res.status(403).json({ success: false, errors: { err: errMsg } })
            } else {
                return res.status(500).json({ success: false, errors: { err: "Unknown Error occurred please try again" } });
            }
        }
    },
    // SECTION Get Login user
    getLogInUser: async (req, res) => {
        const user = req.user;
        if (user) {
            const { email, username, isActive, _id } = user;
            const token = await encrypt.assignUserToken({ payload: _id })
            res.status(200).json({ success: true, data: { user: { email, username, isActive, _id, token } } })
        } else {
            res.status(401).json({ success: false, errors: { err: 'Please login' } })
        }
    }
}


export default authController; 