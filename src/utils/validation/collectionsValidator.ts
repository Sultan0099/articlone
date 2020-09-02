import Joi from "@hapi/joi";

import { CollectionsErrType } from '../../types';


const collection = Joi.object<CollectionsErrType>({
    user: Joi.string(),
    title: Joi.string().min(4).max(15).required(),
    description: Joi.string().min(25).max(50).required()
});

export default { collection };