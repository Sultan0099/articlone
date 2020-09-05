import Joi from "@hapi/joi";
import { ProfileErrType } from "../../types";

const profile = Joi.object<ProfileErrType>({
    firstName: Joi.string().min(3).max(15).required(),
    lastName: Joi.string().min(3).max(15).required(),
    purposeToJoin: Joi.string().min(20).max(150).required(),
    profileImg: Joi.string(),
});

export default { profile }


