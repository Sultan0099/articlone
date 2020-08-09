import createError from "http-errors";


import { PostControllerType } from "../types";

const postControllers: PostControllerType = {
    create: (req, res, next) => {
        try {
            res.json({ success: true, data: { msg: "done" } })
        } catch (err) {
            next(createError(err))
        }
    },
    update: (req, res, next) => {
        try {
            res.json({ success: true, data: { msg: "done" } })
        } catch (err) {
            next(createError(err))
        }
    },
    delete: (req, res, next) => {
        try {
            res.json({ success: true, data: { msg: "done" } })
        } catch (err) {
            next(createError(err))
        }
    },
    getAllPost: (req, res, next) => {
        try {
            res.json({ success: true, data: { msg: "done" } })
        } catch (err) {
            next(createError(err))
        }
    },
    getSingle: (req, res, next) => {
        try {
            res.json({ success: true, data: { msg: "done" } })
        } catch (err) {
            next(createError(err))
        }
    }
}

export default postControllers; 