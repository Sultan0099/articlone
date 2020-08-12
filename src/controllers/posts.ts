import createError from "http-errors";

import { Posts, Collections } from "../models"

import { PostControllerType } from "../types";

const postControllers: PostControllerType = {
    create: async (req, res, next) => {
        try {
            const userId = req.user._id;
            const { collectionId, description, title, body } = req.body;

            const collection = await Collections.findOne({ _id: collectionId });

            if (!collection) return next(createError(404, "Collection not found"));


            if (collection.user.toString() !== userId.toString()) {
                return next(createError(401, "This collection is not handle by this user"));
            }

            const newPost = await Posts.create({ collectionId, title, description, body, handler: userId });

            return res.status(200).json({ success: true, data: { post: newPost } })
        } catch (err) {
            next(createError(err))
        }
    },
    update: async (req, res, next) => {
        try {
            const userId = req.user._id;

            const { postId } = req.params;

            const post = await Posts.findOne({ _id: postId });

            if (!post) return next(createError(404, "post not found"))

            if (userId.toString() !== post.handler.toString()) { return next(createError(401, "This post is not handle by this user")); }

            await post.updateOne(req.body);

            return res.status(200).json({ success: true, data: { postId: post._id } });
        } catch (err) {
            next(createError(err))
        }
    },
    delete: async (req, res, next) => {
        try {
            const userId = req.user._id;
            const { postId } = req.params;

            const post = await Posts.findOne({ _id: postId });

            if (!post) return next(createError(404, "Post not found"));

            if (post.handler !== userId) return next(createError(401, "This post is not handle by this user"));

            const deletedPost = await post.deleteOne();


            return res.status(200).json({ success: true, data: { postId: deletedPost._id } });

        } catch (err) {
            next(createError(err))
        }
    },
    getAllPost: async (req, res, next) => {
        try {
            const userId = req.user._id;
            const { collectionId } = req.params;

            const collection = await Collections.findOne({ _id: collectionId });

            if (!collection) return next(createError(404, "Collection not found"))

            if (collection.user.toString() !== userId.toString()) return next(createError(401, "this collection is not created by this user"));

            const posts = await Posts.find({ collectionId: collection._id });

            return res.status(200).json({ success: true, data: { posts } })


        } catch (err) {
            next(createError(err))
        }
    },
    getSingle: async (req, res, next) => {
        try {
            const userId = req.user._id;
            const { postId } = req.body;

            const post = await Posts.findOne({ _id: postId });

            if (!post) return next(createError(404, "post not found"));

            if (post.handler.toString() !== userId.toString()) {
                return next(createError(401, "This post is not created by this user"));
            }

            return res.status(200).json({ success: true, data: { post } })

        } catch (err) {
            next(createError(err))
        }
    },
    pagination: async (req, res, next) => {
        try {
            const userId = req.user._id;
            const { collectionId } = req.params;

            const { limit = 10, page = 1 } = req.query;
            console.log(typeof limit)
            const collection = await Collections.findOne({ _id: collectionId });

            if (!collection) return next(createError(404, "Collection not found"))

            if (collection.user.toString() !== userId.toString()) return next(createError(401, "this collection is not created by this user"));

            const posts = await Posts.find({ collectionId: collection._id }).limit(+limit).skip((+page - 1) * +limit);

            const totalPost = await Posts.countDocuments({ collectionId: collection._id });

            return res.status(200).json({ success: true, data: { totalPages: Math.ceil(totalPost / +limit), currentPage: +page, totalPosts: +totalPost, postPerPage: +limit, posts } })

        } catch (err) {
            next(createError(err))
        }
    }
}

export default postControllers; 