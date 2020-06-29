import express from 'express';

const router = express.Router();

/* 
SECTION  Login
Des : Login Route
path : '/api/v1/login'
*/
router.get('/login', async (req, res) => {
    res.send('hey i am login')
})

/* 
SECTION  Register
Des : Register Route
path : '/api/v1/register'
*/
router.get('/register', async (req, res) => {
    res.send('hey i am register')
})


export default router;


