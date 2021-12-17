const express = require("express");
const router = express.Router();
const {requireSignin, isAuth,isAdmin} = require('../controllers/authController');
const {userById,listAllUser} = require('../controllers/userController');


router.get('/test/:userId',requireSignin,isAuth,isAdmin,(req,res) => {
    res.json({
        hello:"HelloWorld"
    })
});
router.get('/users/:userId',requireSignin,isAuth,isAdmin,listAllUser);
router.param("userId", userById);
module.exports = router;

