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
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },

    business: {
        businessType: {
            type: String,
            enum: ['individual', 'company'],
            required: false
        },
        businessName: {
            type: String,
            required: false
        },
        businessWebsite: {
            type: String,
            required: false
        },
        required: false
    },

    purposeToJoin: {
        type: String,
        required: false
    },

    contactInfo: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zipOrPostal: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        },
    }

}, { timestamps: true });


const Profile = mongoose.model<IProfile>('profile', profileSchema, 'profiles');

export default Profile; 