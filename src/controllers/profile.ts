import createError from "http-errors";

import { ProfileControllerType } from "../types";
import { Profile, User } from "../models";
import { profileValidator } from "../utils";

const profileController: ProfileControllerType = {
    create: async (req, res, next) => {
        try {
            const { user } = req.body;
            const userExist = await User.findOne({ _id: user });
            if (!userExist) return next(createError(400, "user not found"));
            const result = await profileValidator.profile.validateAsync(req.body)
            if (result) {
                const profile = await Profile.create(req.body)
                userExist.profile = profile._id;
                await userExist.updateOne(userExist);
                return res.status(200).json({ success: true, profile });
            } else {
                next(createError(403, 'user validation failed'))
            }
        } catch (err) {
            console.dir({ err })
            next(createError(err))
        }

    }
}

export default profileController;