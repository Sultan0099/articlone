import { User } from "../models";
import { AuthControllerType } from "../types";
import { registerValidator, EmailService } from "../utils";

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

            const createdUser = await User.create({ username, email, password });
            const emailResponse = await emailService.sendMail(createdUser.email, "Email Verification", '<h1> hello from articlone </h1>');
            console.log("email response", emailResponse)
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
        } catch (err) {
            console.log(err)
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
            console.log(err)
        }
    }
}


export default authController; 