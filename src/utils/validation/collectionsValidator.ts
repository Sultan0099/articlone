import Joi from "@hapi/joi";

import { CollectionsErrType } from '../../types';


const collection = Joi.object<CollectionsErrType>({
    user: Joi.string(),
    title: Joi.string().min(10).max(25).required(),
    description: Joi.string().min(25).max(150).required()
});



export default { collection };