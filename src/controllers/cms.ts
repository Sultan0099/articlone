import createError from "http-errors";
import mongoose from "mongoose";

import { CMS, Posts, CmsUser } from "../models";

import { CmsControllerType } from "../types";

const cmsController: CmsControllerType = {
    getPosts: async (req, res, next) => {
        try {
            const { apiKey, filter } = req.params;
            const { limit = 10, page = 1 } = req.query;

            if (filter == "all" || filter == "published" || filter == "unpublished") {
                const cms = await CMS.findOne({ apiKey });
                if (!cms) { return next(createError(401, "Api Key is invalid")) }

                const fieldsToRemove = {
                    "collectionId": 0,
                    "__v": 0,
                    "handler": 0,
                }

                const query = filter === "all" ? { collectionId: cms.collectionId } : { collectionId: cms.collectionId, state: filter }
                const posts = await Posts.find(query).sort({ createdAt: -1 }).select(fieldsToRemove).limit(+limit).skip((+page - 1) * +limit);

                const totalPost = await Posts.countDocuments(query);

                const totalPages = Math.ceil(totalPost / +limit);
                const currentPage = +page > totalPages ? totalPages : +page;


                return res.status(200).json({ success: true, data: { totalPages: +totalPages, currentPage: +currentPage, totalPost: +totalPost, postPerPage: +limit, posts } })
            } else {
                next(createError("404", `${filter} is not a valid query`));
            }


        } catch (error) {
            next(createError(error.status, error))
        }
    },
    login: async (req, res, next) => {
        try {
            const { apiKey } = req.params;
            const { name, email, password } = req.body;

            if (!apiKey) return next(createError(401, "Provide your api key"))

            const cms = await CMS.findOne({ apiKey });

            if (!cms) return next(createError(401, "Api key is wrong"));

            if (!email || !password) return next(createError(403, "wrong credentials"));

            const cmsUser = await CmsUser.findOne({ email: email.toLowerCase(), collectionId: cms.collectionId, cmsId: cms._id });

            if (!cmsUser) return next(createError(403, "This user is not registered"));

            const isValidPassword = await cmsUser.isValidPassword(password);

            if (!isValidPassword) return next(createError(403, "we are not able to find user"));

            return res.status(200).json({ success: true, data: { name: cmsUser.name, email: cmsUser.email } })

        } catch (error) {
            next(createError(error))
        }
    },
    register: async (req, res, next) => {
        try {
            const { apiKey } = req.params;
            const { name, email, password } = req.body;

            if (!apiKey) return next(createError(401, "Provide your api key"))

            const cms = await CMS.findOne({ apiKey });

            if (!cms) return next(createError(401, "Api key is wrong"));

            if (!email || !password || !name) return next(createError(403, "wrong credentials"));

            const cmsUser = await CmsUser.findOne({ email: email.toLowerCase(), collectionId: cms.collectionId, cmsId: cms._id });

            if (cmsUser) return next(createError(403, "This user is already registered"));

            await CmsUser.create({ name: name.toLowerCase(), email: email.toLowerCase(), password, collectionId: cms.collectionId, cmsId: cms._id });
            return res.status(200).json({ success: true, msg: 'user has registered successfully' });
        } catch (error) {
            next(createError(error))
        }
    },
    getSinglePost: async (req, res, next) => {
        try {
            const { apiKey, postId } = req.params;

            if (!apiKey) return next(createError(401, "Provide your api key"))

            if (!postId) return next(createError(401, "Provide post id"));

            if (!mongoose.isValidObjectId(postId)) return next(createError(401, "invalid post id"))

            const cms = await CMS.findOne({ apiKey });

            if (!cms) return next(createError(401, "Api key is in valid"));
            const fieldsToRemove = {
                "collectionId": 0,
                "__v": 0,
                "handler": 0,
            }
            const post = await Posts.findOne({ _id: postId }).select(fieldsToRemove);

            res.status(200).json({ success: true, data: { post: !post ? null : post } })
        } catch (error) {
            console.log(error)
            next(createError(error))
        }

    },
    likePost: async (req, res, next) => {
        try {
            res.status(200).send("like post")
        } catch (error) {
            console.log(error)
        }
    },
    commentPost: async (req, res, next) => {
        try {
            res.status(200).send("comment posts")
        } catch (error) {
            console.log(error)
        }
    },
};

export default cmsController; 