import { Router } from "express";
import passport from 'passport';

import "../config/passport";  //  importing passport configuration from config folder ;
import { postControllers } from "../controllers";
import upload from "../config/multer";


const router = Router();


const passportJWT = passport.authenticate('jwt', { session: false });

/* 
SECTION  Create post
@Des : Create Post Route
@method : Post
@path : '/api/v1/posts/create'
@req : { collectionId , title , description , img , body }
@res : { _id  , title, description , img , collectionId }
*/

router.post("/create", passportJWT, postControllers.create);

/* 
SECTION  Update Post
@Des : Update Posts Route
@method : Patch
@path : '/api/v1/posts/update'
@params : { postId }
@req : {  title , description , img , body  }
@res : { postId }
*/

router.patch("/update/:postId", passportJWT, postControllers.update);

/* 
SECTION  Delete Post
@Des : Delete Posts Route
@method : DELETE
@path : '/api/v1/posts/delete/:postId'
@req : null
*/

router.delete("/delete/:postId", passportJWT, postControllers.delete);

/* 
SECTION  All Post
@Des : GET All Posts Route
@method : GET
@path : '/api/v1/posts/getAll/:collectionId'
*/

router.get("/getAll/:collectionId", passportJWT, postControllers.getAllPost);

/* 
SECTION  Single Post
@Des : GET Single Posts Route
@method : GET
@path : '/api/v1/posts/getSingle/:postId'
*/


router.get("/getSingle/:postId", passportJWT, postControllers.getSingle);
/* 
SECTION  Paginated Post
@Des : GET Single Posts Route
@method : GET
@path : '/api/v1/posts/paginatedPost/:collectionId'
*/
router.get("/paginatedPost/:collectionId", passportJWT, postControllers.pagination);


/* 
SECTION  Upload content images Post
@Des : upload content img 
@method : post
@path : '/api/v1/posts/upload-content'
*/
router.post("/upload-content", upload.single('upload'), postControllers.uploadContentImgs)

export default router;