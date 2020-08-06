import { Router } from "express";
import passport from 'passport';

import "../config/passport";  //  importing passport configuration from config folder ;

import { collectionControllers } from "../controllers";

const router = Router();

const passportJWT = passport.authenticate('jwt', { session: false })

/* 
SECTION  Create Collections
@Des : Create Collections Route
@method : Post
@path : '/api/v1/collections/create'
@req : { user , title , description }
@res : { user , title, description}
*/

router.post('/create', passportJWT, collectionControllers.create);
/* 
SECTION  Delete Collections
@Des : Delete Collections Route
@method : Delete
@path : '/api/v1/collections/delete'
@req  : params : { collectionId }]
*/
router.delete('/delete/:collectionId', passportJWT, collectionControllers.delete);


/* 
SECTION  Update Collections
@Des : Update Collections Route
@method : Patch
@path : '/api/v1/collections/update'
@req : {  title , description }
@res : {  title, description}
*/

router.patch("/update", passportJWT, collectionControllers.update)

router.get("/getAll", passportJWT, collectionControllers.getAllPost)

export default router;