import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import createError from "http-errors";

import { IUser } from "../types";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

userSchema.path("username").validate(async function (username: string) {
    return (await User.countDocuments({ username })) === 0;
}, "username already taken");

userSchema.path("email").validate(async function (email: string) {
    return (await User.countDocuments({ email: email.toLowerCase() })) === 0;
}, "email already register");




userSchema.pre<IUser>('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next();
    } catch (err) {
        next(createError(500, err))
    }
});




userSchema.methods.isValidPassword = async function (newPassword: string) {
    try {
        return bcrypt.compare(newPassword, this.password);
    } catch (err) {
        throw new Error(err);
    }
};

const User = mongoose.model<IUser>('User', userSchema, 'users');

export default User; 