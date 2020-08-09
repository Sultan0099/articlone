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
    img: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    collectionId: {
        type: Schema.Types.ObjectId,
        ref: "Collections",
    }
});


const Post = model<IPost>("Post", postSchema, 'posts');

export default Post;