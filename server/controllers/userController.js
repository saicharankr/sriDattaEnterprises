const User = require("../models/userModel");

exports.userById = (req, res, next, id) => {
    try{
        User.findOne({userId:id}).exec((err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    error: true,
                    message:"User Not Found"
                });
            }
            req.profile = user;
            next();
        });
    }catch(err){
        return res.status(400).json({
            error: true,
            message:err
        });
    }

};