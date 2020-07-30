import createError from "http-errors";
import { collectionControllerType } from "../types";

const collectionControllers: collectionControllerType = {
    create: async (req, res, next) => {
        try {
            const { user, title, description } = req.body;
        } catch (err) {
            next(createError(err))
        }
    }
}