import express from 'express';
import passport from 'passport';

import "../config/passport";  //  importing passport configuration from config folder ;

import { authController } from '../controllers';
import createError from "http-errors";


const passportJWT = passport.authenticate('jwt', { session: false })

const router = express.Router();

/* 
SECTION  Login
@Des : Login Route
@method : Post
@path : '/api/v1/login'
@req : { usernameOrEmail , password }
@res : { user : { username , email , isActive , _id } , jwtToken }
*/
router.post('/login', authController.login)
// router.post('/login', async (req, res, next) => {
//     passport.authenticate('local', function (err, user, info) {
//         if (err) { console.log(err); return next(createError(401, err)); }
//         // if (!user) { return res.redirect('/login'); }
//         console.log(user)
//         res.send("login")
//     })(req, res, next);
// })

/* 
SECTION  Register
@Des : Register Route
@method : Post
@path : '/api/v1/register'
@req : { username , email  , password }
@res : { user : { username , email , isActive , _id } , jwtToken }
*/
router.post('/register', authController.register);

/* 
SECTION  Confirm Email
@Des : Confirm Email Route
@method : Post
@path : '/api/v1/confirm-email'
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
@req : { usernameOrEmail }
*/
router.post("/forget-password", authController.forgetPassword);

/* 
SECTION  Forget User
@Des : Reset password route
@method : Post
@path : '/api/v1/reset-password'
@req : { token , password , confirmPassword }
*/

router.post("/reset-password", authController.resetPassword);


/* 
SECTION  get User by token
@Des : Get User Route
@method : Post
@path : '/api/v1/get-user-token'
@req : null , 
@headers : { authorization : Bearer + token }
*/
router.get('/get-user-token', passportJWT, authController.getLogInUser);

/* 
SECTION  get User by token
@Des : Google Auth Route
@method : GET
@path : '/api/v1/auth/google'
@req : null , 
@headers : null
*/
router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
    authController.googleAuth
);

router.get("/check", (req, res) => {
    res.send("check successful")
})
export default router;


