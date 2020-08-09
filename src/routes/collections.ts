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
@path : '/api/v1/collections/delete/:collectionId'
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

/* 
SECTION  Get All  Collections
@Des : Get All  Collections Route
@method : GET
@path : '/api/v1/collections/getAll'
@req : null 
@res : [ collection ]
*/

router.get("/getAll", passportJWT, collectionControllers.getAllPost)

/* 
SECTION  Get Single Collection
@Des : Get Single Collection Route
@method : GET
@path : '/api/v1/collections/getSingle'
@req : null
@res : {  title, description}
*/
router.get('/getSingle/:collectionId', passportJWT, collectionControllers.getSingle)

export default router;