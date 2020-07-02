import mongoose from 'mongoose';

import { IToken } from "../types";

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 43200
    }
});

const Token = mongoose.model<IToken>('Token', tokenSchema, 'tokens');

export default Token; 