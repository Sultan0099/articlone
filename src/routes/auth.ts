import express from 'express';
import passport from 'passport';

import "../config/passport";  //  importing passport configuration from config folder ;

import { authController } from '../controllers';


const router = express.Router();

/* 
SECTION  Login
@Des : Login Route
@method : Post
@path : '/api/v1/login'
@req : { usernameOrEmail , password }
@res : { msg : "successfully login"}
*/
router.post('/login', passport.authenticate('local', { session: true }), authController.login)

/* 
SECTION  Register
@Des : Register Route
@method : Post
@path : '/api/v1/register'
@req : { username , email  , password }
*/
router.post('/register', authController.register);

/* 
SECTION  Confirm Email
@Des : Confirm Email Route
@method : Post
@path : '/api/v1/confirmEmail'
@req : { token }
*/
router.post('/confirm-email', authController.emailConfirm);

/* 
SECTION  resend Email
@Des : resend Email Route
@method : Post
@path : '/api/v1/resend-mail'
@req : { email }
*/
router.post("/resend-mail", authController.resend);

/* 
SECTION  logout User
@Des : logout User route
@method : Post
@path : '/api/v1/logout'
@req : null 
@headers : { authorization }
*/
router.post('/logout', authController.logout);

/* 
SECTION  Forget User
@Des : Forget password route
@method : Post
@path : '/api/v1/forget-password'
@req : { email }
*/
router.post("/forget-password", authController.forgetPassword);

/* 
SECTION  Forget User
@Des : Reset password route
@method : Post
@path : '/api/v1/reset-password'
@req : { token , password  }
*/

router.post("/reset-password", authController.resetPassword);


router.get('/get-user', authController.getLogInUser);
export default router;


