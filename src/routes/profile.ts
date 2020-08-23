import { Router } from "express";
import passport from 'passport';

import "../config/passport";  //  importing passport configuration from config folder ;
import { profileController } from "../controllers";
import upload from "../config/multer";
const router = Router();

const passportJWT = passport.authenticate('jwt', { session: false })

/* 
SECTION  Profile
@Des : Profile create Route
@method : Post
@path : '/api/v1/profile/create'
@req : {  firstName , lastName ,  purposeToJoin } 
@res : { success , profile : @req }
@header : { authenticate : Bearer + token }
*/
router.post("/create", passportJWT, profileController.create)

/* 
SECTION  Profile
@Des : Profile update Route
@method : Post
@path : '/api/v1/profile/update'
@req : {  firstName , lastName ,  purposeToJoin } 
@res : { success , msg : "successful" }
@header : { authenticate : Bearer + token }
*/
router.post("/update", passportJWT, profileController.update);

/* 
SECTION  Profile
@Des : Profile create Route
@method : Post
@path : '/api/v1/profile/upload-profile-img'
@res : { success , profile : @req }
@header : { authenticate : Bearer + token }
*/
router.post('/upload-profile-img', passportJWT, upload.single('profile-img'), profileController.uploadProfileImg)


export default router;