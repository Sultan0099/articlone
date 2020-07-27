import { Router } from "express";
import passport from 'passport';

import "../config/passport";  //  importing passport configuration from config folder ;
import { profileController } from "../controllers";

const router = Router();


/* 
SECTION  Profile
@Des : Profile create Route
@method : Post
@path : '/api/v1/profile/create'
@req : { user : mongoseId , firstName , lastName , gender , purposeToJoin , contactInfo : { address , city , zipOrPostal , country , phoneNo } , business !optional : { businessType , businessName , businessWebsite }
@res : { success , profile : @req }
@header : { authenticate : Bearer + token }
*/
router.post("/create", passport.authenticate('jwt', { session: false }), profileController.create)


export default router;