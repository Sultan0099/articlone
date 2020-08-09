import { Router } from "express";
import passport from 'passport';

import "../config/passport";  //  importing passport configuration from config folder ;

const router = Router();

import { postControllers } from "../controllers";

const passportJWT = passport.authenticate('jwt', { session: false });

/* 
SECTION  Create post
@Des : Create Post Route
@method : Post
@path : '/api/v1/posts/create'
@req : { collectionId , title , description , img , body }
@res : { _id  , title, description , img , collectionId }
*/

router.get("/create", passportJWT, postControllers.create);

/* 
SECTION  Update Post
@Des : Update Posts Route
@method : Patch
@path : '/api/v1/posts/update'
@req : {  title , description , img , body }
@res : { postId }
*/

router.get("/update", passportJWT, postControllers.update);

/* 
SECTION  Delete Post
@Des : Delete Posts Route
@method : DELETE
@path : '/api/v1/posts/delete/:postId'
@req : null
*/

router.get("/delete/:postId", passportJWT, postControllers.delete);

/* 
SECTION  All Post
@Des : GET All Posts Route
@method : GET
@path : '/api/v1/posts/getAll'
*/

router.get("/getAll", passportJWT, postControllers.getAllPost);

/* 
SECTION  Single Post
@Des : GET Single Posts Route
@method : GET
@path : '/api/v1/posts/getSingle/:postId'
*/

router.get("/getSingle/:postId", passportJWT, postControllers.getSingle);

export default router;