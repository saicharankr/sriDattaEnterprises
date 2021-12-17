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
            req.profile = {userId:user.userId,role:user.role};
            next();
        });
    }catch(err){
        return res.status(400).json({
            error: true,
            message:err
        });
    }
};

exports.listAllUser = (req, res) => {
  try {
    User.find((err, users) => {
      if (err) {
        return res.status(400).json({
          error: true,
          message: err,
        });
      }
      res.json({
        success: true,
        data: users,
      });
    }).select("userId firstName lastName email role active");
  } catch (err) {
    return res.status(400).json({
        error: true,
        message:err
    });
  }
};

