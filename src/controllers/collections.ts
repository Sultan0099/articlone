import createError from "http-errors";
import { v4 as uuidv4 } from 'uuid';

import { collectionControllerType } from "../types";
import { Collections, CMS } from "../models";
import { collectionsValidator } from "../utils";


const collectionControllers: collectionControllerType = {
    create: async (req, res, next) => {
        try {
            const userId = req.user._id;
            const { title, description } = req.body;
            const result = await collectionsValidator.collection.validateAsync({ user: userId.toString(), title, description });
            console.log(result)
            if (result) {

                const collection = await Collections.create({ user: result.user, title: result.title, description: result.description });

                const apiKey = uuidv4();

                await CMS.create({ collectionId: collection._id, apiKey })
                return res.status(200).json({ success: true, data: { collection } })
            }

        } catch (err) {
            next(createError(err))
        }
    },
    delete: async (req, res, next) => {
        try {
            const postId = req.params.postId;
            if (!postId) return next(createError(400, "postId is incorrect "))

            const deletedCollection = await Collections.findOneAndDelete({ _id: postId });


            if (!deletedCollection) return next(createError(404, "Collection not Found : try create new one "));

            if (req.user._id !== deletedCollection.user) {
                return next(createError(401, 'your cannot delete other collections'))
            }
            return res.status(200).json({ success: true, data: { collection: { _id: deletedCollection._id } } })

        } catch (err) {
            next(createError(err))
        }

    },
    update: async (req, res, next) => {
        try {

            const collection = await Collections.findOne({ _id: req.body.id });
            if (!collection) return next(createError(404, "collection not found "));
            console.log(req.user._id)
            if (req.user._id.toString() !== collection.user.toString()) {
                return next(createError(401, 'you cannot update other collections'))
            }

            // const updateCollection = await Collections.findByIdAndUpdate(req.body.id, req.body);

            const updateCollection = await Collections.findOneAndUpdate({ _id: req.body.id }, req.body);

            return res.status(200).json({ success: true, data: { collectionId: updateCollection!._id } })

        } catch (error) {
            next(createError(error))
        }
    },
    getAllPost: async (req, res, next) => {
        try {
            const userId = req.user._id;
            const collections = await Collections.find({ user: userId });

            if (!collections) return next(createError(404, 'Collections not found : try create new one'));
            res.status(200).json({ success: true, data: { success: true, collections } })
        } catch (err) {
            next(createError(err))
        }
    },
    getSingle: async (req, res, next) => {
        try {
            const collectionId = req.params.collectionId;
            const collection = await Collections.findOne({ _id: collectionId });
            if (!collection) return next(createError(404, 'Collection not found'));
            const cms = await CMS.findOne({ collectionId: collection._id });

            return res.status(200).json({ success: true, data: { collection, apiKey: cms!.apiKey } })
        } catch (err) {
            next(createError(err.status, err))
        }
    }
}


export default collectionControllers;