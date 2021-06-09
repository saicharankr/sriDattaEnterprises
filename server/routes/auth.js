const cleanBody = require("../middlewares/cleanbody");
const {signUpValidations}=require("../validators/validators");
const{ signUp,signin,Activate,ForgotPassword,ResetPassword,signout} = require("../controllers/authController");
const express = require("express");
const cleanbody = require("../middlewares/cleanbody");
const router = express.Router();


router.post("/signin",cleanBody,signin);
router.post("/activate",cleanbody,Activate);
router.post("/signup",cleanBody,signUpValidations,signUp);
router.post("/forgot-password",cleanBody,ForgotPassword);
router.post("/reset-password",cleanBody,ResetPassword);
router.get("/signout",signout);

module.exports = router;