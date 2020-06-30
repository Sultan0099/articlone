import { User } from "../models";
import { AuthControllerType } from "../types";
import { registerValidator } from "../utils";

const authController: AuthControllerType = {
    // SECTION : Register Controller 
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;


            const { isValid, errors } = registerValidator(username, email, password);

            if (!isValid) {
                return res.status(400).json({ success: false, errors });
            }

            const createdUser = await User.create({ username, email, password });
            res.status(200).json({ success: true, user: { id: createdUser._id, username: createdUser.username, email: createdUser.email } })
        } catch (err) {
            if (err.message !== undefined) /*Checking if err consist of message property*/ {
                const errMsg: string = err.message.split(':').pop();
                return res.status(403).json({ success: false, errors: { err: errMsg } })
            } else {
                return res.status(500).json({ success: false, errors: { err: "Error from Server" } });
            }
        }
    },

    // SECTION : Login Controller 
    login: async (req, res) => {
        const { usernameOrEmail } = req.body;
        console.log(usernameOrEmail)
        const user = await User.find().or([{ email: usernameOrEmail }, { username: usernameOrEmail }]);

        res.json({ success: true, user })
    }
}


export default authController; 