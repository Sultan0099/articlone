import createError from "http-errors";
import { v4 as uuidv4 } from 'uuid';

import { collectionControllerType } from "../types";
import { Collections, CMS, Posts } from "../models";
import { collectionsValidator } from "../utils";
import { bucket } from "../config/firebase";

const collectionControllers: collectionControllerType = {
    create: async (req, res, next) => {
        try {
            const userId = req.user._id;
            const { title, description } = req.body;
            const result = await collectionsValidator.collection.validateAsync({ user: userId.toString(), title, description });

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
            const { _id: userId } = req.user;
            const collectionId = req.params.collectionId;

            const collection = await Collections.findOne({ _id: collectionId });

            if (!collection) return next(createError(404, "collection not found"))

            if (userId.toString() !== collection.user.toString()) {
                return next(createError(401, "you don't have permission to delete this"))
            }

            await Posts.deleteMany({ collectionId });
            await CMS.deleteMany({ collectionId })
            await collection.deleteOne();

            res.status(200).json({ success: true, data: { msg: 'collection deleted successfully' } });

        } catch (err) {
            next(createError(err))
        }

    },
    update: async (req, res, next) => {
        try {
            const { _id: userId } = req.user;
            const collectionId = req.params.collectionId;

            const collection = await Collections.findOne({ _id: collectionId });
            if (!collection) return next(createError(404, "collection not found "));
            if (userId.toString() !== collection.user.toString()) {
                return next(createError(401, 'you cannot update other collections'))
            }

            // const updateCollection = await Collections.findByIdAndUpdate(req.body.id, req.body);

            const updateCollection = await Collections.findOneAndUpdate({ _id: collectionId }, req.body);

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
    },
    uploadCollectionImg: async (req, res, next) => {
        try {
            const { _id: userId } = req.user;
            const collectionId = req.params.collectionId;
            const { filename, path, mimetype } = req.file;


            const collection = await Collections.findOne({ _id: collectionId })
            if (!collection) return next(createError(404, "Collection not found"));

            if (userId.toString() !== collection.user.toString()) {
                return next(createError(401, 'you cannot upload img to others collections'))
            }


            await bucket.upload(path, {
                resumable: false,
                metadata: {
                    metadata: {
                        contentType: mimetype
                    }
                }
            });

            let collectionImgUrl = `https://firebasestorage.googleapis.com/v0/b/articlone.appspot.com/o/${filename}?alt=media`;
            collection.collectionImg = collectionImgUrl;
            await collection.updateOne(collection)

            res.status(200).json({ success: true, data: { collectionImg: collectionImgUrl } })

        } catch (error) {

        }
    }
}


export default collectionControllers;