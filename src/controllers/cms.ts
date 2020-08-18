import createError from "http-errors";

import { CMS, Posts } from "../models";

import { CmsControllerType } from "../types";

const cmsController: CmsControllerType = {
    getPosts: async (req, res, next) => {
        try {
            const { apiKey, filter } = req.params;
            const { limit = 10, page = 1 } = req.query;

            if (filter == "all" || filter == "published" || filter == "unpublished") {
                const cms = await CMS.findOne({ apiKey });
                if (!cms) { return next(createError(401, "Api Key is invalid")) }
                const fieldsToGet = {

                    "collectionId": 0,
                    "__v": 0,
                    "handler": 0,

                }
                const query = filter === "all" ? { collectionId: cms.collectionId } : { collectionId: cms.collectionId, state: filter }
                const posts = await Posts.find(query).sort({ createdAt: -1 }).select(fieldsToGet).limit(+limit).skip((+page - 1) * +limit);

                const totalPost = await Posts.countDocuments(query);

                const totalPages = Math.ceil(totalPost / +limit);
                const currentPage = +page > totalPages ? totalPages : +page;


                if (+page > totalPages) return next(createError(403, `There are no more pages then ${totalPages}`))

                return res.status(200).json({ success: true, data: { totalPages: +totalPages, currentPage: +currentPage, totalPost: +totalPost, postPerPage: +limit, posts } })
            } else {
                next(createError("404", `${filter} is not a valid query`));
            }


        } catch (error) {
            next(createError(error.status, error))
        }
    },
    getSinglePost: async (req, res, next) => {
        try {
            res.status(200).send("get single post")
        } catch (error) {
            console.log(error)
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