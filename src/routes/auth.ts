import express from 'express';

import { authController } from '../controllers';

const router = express.Router();

/* 
SECTION  Login
@Des : Login Route
@path : '/api/v1/login'
*/
router.post('/login', authController.login)

/* 
SECTION  Register
@Des : Register Route
@path : '/api/v1/register'
*/
router.post('/register', authController.register);

/* 
SECTION  Confirm Email
@Des : Confirm Email Route
@path : '/api/v1/confirmEmail'
*/
router.post('/confirmEmail', authController.emailConfirm)



export default router;


