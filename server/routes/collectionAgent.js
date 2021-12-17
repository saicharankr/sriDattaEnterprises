const express = require("express");
const router = express.Router();
const {requireSignin, isAuth,isAdmin} = require('../controllers/authController');
const {addCollectionAgent,listAllCollectionAgents}=require('../controllers/collectionAgentController');
const {userById} = require('../controllers/userController');

router.post('/addCollectionAgent/:userId',requireSignin,isAuth,isAdmin,addCollectionAgent);
router.get('/listAllCollectionAgents/:userId',requireSignin,isAuth,isAdmin,listAllCollectionAgents);
router.param("userId", userById);
module.exports = router;