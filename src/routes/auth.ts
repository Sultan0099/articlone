import express from 'express';
import passport from 'passport';

import "../config/passport";  // importing passport configuration from config folder ;

import { authController } from '../controllers';


const router = express.Router();

/* 
SECTION  Login
@Des : Login Route
@method : Post
@path : '/api/v1/login'
*/
router.post('/login', passport.authenticate('local', { session: true }), authController.login)

/* 
SECTION  Register
@Des : Register Route
@method : Post
@path : '/api/v1/register'
*/
router.post('/register', authController.register);

/* 
SECTION  Confirm Email
@Des : Confirm Email Route
@method : Post
@path : '/api/v1/confirmEmail'
*/
router.post('/confirm-email', authController.emailConfirm);

/* 
SECTION  resend Email
@Des : resend Email Route
@method : Post
@path : '/api/v1/resend-mail'
*/
router.post("/resend-mail", authController.resend);

/* 
SECTION  logout User
@Des : logout User route
@method : Post
@path : '/api/v1/logout'
*/

router.post('/logout', authController.logout);

router.get('/get-user', authController.getUser);
export default router;


