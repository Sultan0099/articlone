import Joi from "@hapi/joi";

import { UserErrType } from '../../types';


const registerValidator = Joi.object<UserErrType>({
    username: Joi.string()
        .alphanum()
        .min(3).max(15)
        .required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).max(15).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).equal(Joi.ref('password')).required().label("password must match")
});

const resetPassword = Joi.object<UserErrType>({
    password: Joi.string().min(8).max(15).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).equal(Joi.ref('password')).required().label("password must match")
})


export default { registerValidator, resetPassword };

