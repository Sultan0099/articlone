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


export default router;


