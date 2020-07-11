import Joi from "@hapi/joi";

import { UserErrType } from '../../types';


const registerValidator = Joi.object<UserErrType>({
    username: Joi.string()
        .alphanum()
        .min(3).max(20)
        .required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).max(15).required()
})

export default { registerValidator };