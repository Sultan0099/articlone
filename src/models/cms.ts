import { Schema, model } from "mongoose";

import { ICMS } from "../types";

const cmsSchema = new Schema({
    collectionId: {
        type: Schema.Types.ObjectId,
        ref: "Collections"
    },
    apiKey: {
        type: String,
        required: true
    },

});

const CMS = model<ICMS>("CMS", cmsSchema, 'cms');

export default CMS; 