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

            res.status(200).json({ success: true, data: { email: user.email, username: user.username } })

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
            if (!user) return res.status(400).json({ success: false, errors: { err: "Email is not exist : Try Registration" } });

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
            const { usernameOrEmail } = req.body;
            console.log(usernameOrEmail)
            const user = await User.find().or([{ email: usernameOrEmail }, { username: usernameOrEmail }]);

            res.json({ success: true, user })
        } catch (err) {

        }
    }
}


export default authController; 