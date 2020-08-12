import { Schema, model } from "mongoose";

import { IPost } from "../types";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    handler: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    body: {
        type: String,
        required: true
    },
    collectionId: {
        type: Schema.Types.ObjectId,
        ref: "Collections",
    },
    state: {
        type: String,
        enum: ["published", "unpublished"],
        default: "unpublished"
    }
}, { timestamps: true });


const Post = model<IPost>("Post", postSchema, 'posts');

export default Post;