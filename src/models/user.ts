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
    }

}, { timestamps: true });

userSchema.path("username").validate(async function (username: string) {
    console.log("validates runs", username);
    return (await User.countDocuments({ username })) === 0;
}, "username already taken");

userSchema.path("email").validate(async function (email: string) {
    console.log("validates runs", email);
    return (await User.countDocuments({ email })) === 0;
}, "This email already register");


const User = mongoose.model<IUser>('user', userSchema, 'users');

export default User; 