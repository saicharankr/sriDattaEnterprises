const express = require("express");
const router = express.Router();
const {requireSignin, isAuth,isAdmin} = require('../controllers/authController');
const {userById} = require('../controllers/userController');

/**
 * @swagger
 * /users:
 *   get:
 *     summary: List of users.
 *     description: This api end point retrieves list users.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 */
router.get('/test/:userId',requireSignin,isAuth,isAdmin,(req,res) => {
    res.json({
        hello:"HelloWorld"
    })
});
router.param("userId", userById);
module.exports = router;

