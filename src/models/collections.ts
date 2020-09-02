import { Schema, model as mongooseModel } from "mongoose";
import { ICollections } from "../types";

const collectionsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    collectionImg: {
        type: String,
        default: null
    }

}, { timestamps: true });

const Collections = mongooseModel<ICollections>('Collections', collectionsSchema, 'collections');

export default Collections;


