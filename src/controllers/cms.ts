import createError from "http-errors";

import { CmsControllerType } from "../types";

const cmsController: CmsControllerType = {
    getAllPost: async (req, res, next) => {
        try {

            const apiKey = req.params;

            res.status(200).send("get all posts")
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