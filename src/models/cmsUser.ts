import { Schema, model } from "mongoose";
import createError from "http-errors";
import bcrypt from 'bcrypt';

import { ICmsUser } from '../types';

const cmsUserSchema = new Schema({
    cmsId: {
        type: Schema.Types.ObjectId,
        ref: "CMS"
    },
    collectionId: {
        type: Schema.Types.ObjectId,
        ref: "Collections"
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })


cmsUserSchema.pre<ICmsUser>('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next();
    } catch (err) {
        next(createError(500, err))
    }
});




cmsUserSchema.methods.isValidPassword = async function (newPassword: string) {
    try {
        return bcrypt.compare(newPassword, this.password);
    } catch (err) {
        throw new Error(err);
    }
};

const CmsUser = model<ICmsUser>("CmsUser", cmsUserSchema, "cmsUser");

export default CmsUser; 