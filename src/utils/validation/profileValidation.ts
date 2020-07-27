import Joi from "@hapi/joi";
import { ProfileErrType, BusinessErrType, ContactErrType } from "../../types";

const profile = Joi.object<ProfileErrType>({
    user: Joi.string(),
    firstName: Joi.string().min(3).max(15).required(),
    lastName: Joi.string().min(3).max(15).required(),
    gender: Joi.string().required(),
    purposeToJoin: Joi.string().min(20).max(150).required(),
    business: Joi.object<BusinessErrType>({
        businessType: Joi.string(),
        businessName: Joi.string(),
        businessWebsite: Joi.string()
    }),
    contactInfo: Joi.object<ContactErrType>({
        address: Joi.string().required(),
        city: Joi.string().min(3).max(20).required(),
        zipOrPostal: Joi.number().required(),
        country: Joi.string().min(8).max(20).required(),
        phoneNo: Joi.string().required()
    }).required()

});

export default { profile }


