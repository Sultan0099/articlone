import createError from "http-errors";

import { ProfileControllerType } from "../types";
import { Profile, User } from "../models";
import { profileValidator } from "../utils";
import { bucket } from "../config/firebase";

const profileController: ProfileControllerType = {
    create: async (req, res, next) => {
        try {
            const { _id: userId } = req.user;
            const userExist = await User.findOne({ _id: userId });
            if (!userExist) return next(createError(400, "user not found"));

            const profile = await Profile.findOne({ user: userId });
            if (profile) return next(createError(400, "Your already have created profile"))

            const result = await profileValidator.profile.validateAsync(req.body);
            if (result) {
                const profile = await Profile.create({ user: userExist._id, ...req.body })
                userExist.profile = profile._id;
                await userExist.updateOne(userExist);
                return res.status(200).json({ success: true, data: { profile } });
            } else {
                next(createError(403, 'user validation failed'))
            }
        } catch (err) {
            console.dir({ err })
            next(createError(err))
        }

    },
    update: async (req, res, next) => {
        try {
            const { _id: userId } = req.user;

            const profile = await Profile.findOne({ user: userId });
            if (!profile) return next(createError(404, "profile not found : Create new One"));

            const result = await profileValidator.profile.validateAsync(req.body);

            await profile.updateOne(result);

            res.status(200).json({ success: true, data: { msg: "profile updated successfully" } })

        } catch (error) {
            console.log({ error })
            next(createError(error.msg, error))
        }
    },

    uploadProfileImg: async (req, res, next) => {
        try {
            const { _id: userId } = req.user;
            const { filename, path, mimetype } = req.file;

            const profile = await Profile.findOne({ user: userId });
            if (!profile) return next(createError(404, 'Profile not found create new one'));

            await bucket.upload(path, {
                resumable: false,
                metadata: {
                    metadata: {
                        contentType: mimetype
                    }
                }
            });

            let profileImgUrl = `https://firebasestorage.googleapis.com/v0/b/articlone.appspot.com/o/${filename}?alt=media`;
            profile.profileImg = profileImgUrl;
            await profile.updateOne(profile)
            res.status(200).json({ success: true, data: { profileImg: profileImgUrl } })

        } catch (error) {
            next(createError(error))
        }
    }
}

export default profileController;