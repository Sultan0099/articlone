import mongoose from 'mongoose';

import { IProfile } from "../types";

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },


    purposeToJoin: {
        type: String,
        required: true
    },

    profileImg: {
        type: String,
        required: false,
        default: null
    }

}, { timestamps: true });


const Profile = mongoose.model<IProfile>('profile', profileSchema, 'profiles');

export default Profile; 