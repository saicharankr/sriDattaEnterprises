const express = require("express");
const router = express.Router();
const {requireSignin, isAuth,isAdmin} = require('../controllers/authController');
const {addShowroom,listAllShowrooms,searchAllShowrooms}=require('../controllers/showroomController');
const {userById} = require('../controllers/userController');

router.post('/addShowroom/:userId',requireSignin,isAuth,isAdmin,addShowroom);
router.get('/listShowrooms/:userId',requireSignin,isAuth,isAdmin,listAllShowrooms);
router.get('/searchShowrooms/:userId/',requireSignin,isAuth,isAdmin,searchAllShowrooms);
router.param("userId", userById);
module.exports = router;