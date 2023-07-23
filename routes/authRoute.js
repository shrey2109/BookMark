const express = require('express');
// const registerController = require('../controllers/authController');
// const loginController = require('../controllers/authController');
// const testController = require('../controllers/authController');
const { registerController, loginController, testController, forgotPasswordController, updateProfileController } = require('../controllers/authController');
const {requireSignIN, isAdmin} = require('../middlewares/authMiddleware');


// router object
const router = express.Router();

//routing
// REGISTER || METHOD POST 
router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController);

// Forgot password
router.post('/forgot-password', forgotPasswordController);

// TEST || POST
router.get('/test', requireSignIN, isAdmin,  testController);

//protected User route auth
router.get('/user-auth', requireSignIN, (req, res)=>{
    res.status(200).send({ok:true});
});

//protected Admin route auth
router.get('/admin-auth', requireSignIN, isAdmin, (req, res)=>{
    res.status(200).send({ok:true});
});

//update profile
 router.put("/profile", requireSignIN, updateProfileController)


module.exports = router;

