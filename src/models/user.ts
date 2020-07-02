import mongoose from 'mongoose';
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
    return (await User.countDocuments({ email })) === 0;
}, "email already register");


const User = mongoose.model<IUser>('User', userSchema, 'users');

export default User; 