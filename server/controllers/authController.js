const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
// const { logger } = require("../helpers/logging");
const { v4: uuidV4 } = require("uuid");
const { sendEmail } = require("../helpers/sendEmail");
const { generateJwt } = require("../helpers/generateJWT");
const expressJwt = require("express-jwt");
require("dotenv").config();

exports.signUp = async (req, res) => {
  try {
    const result = req.body;
    //Assigning the userId
    var id = uuidV4();
    result.userId = id;

    let code = Math.floor(100000 + Math.random() * 900000); //Generate random 6 digit code.
    let expiry = Date.now() + 60 * 1000 * 15; //Set expiry 15 mins ahead from now

    result.emailToken = code;
    result.emailTokenExpires = new Date(expiry);

    const newUser = await new User(result);
    newUser.save(async (err) => {
      if(err){
        return res.json(500).json({
          error:true,
          message:"Cannot save to database"
        })
      }else{
        const sendCode = await sendMail(result.email, code);
        if (sendCode.error) {
          console.log(sendCode.error);
          return res.status(500).json({
            error: true,
            message: "Couldn't send verification email.",
          });
        }
        return res.status(200).json({
          success: true,
          message: "Registration Success",
        });
      }
    });
  } catch (err) {
    // logger.error(err);
    console.log(err);
    return res.status(500).json({
      error: true,
      message: "Cannot Register",
    });
  }
};

exports.signin = (req, res) => {
  try {
    const { email, password } = req.body;

    //Checking If email exist
    User.findOne({ email }, async (err, user) => {
      if (err || !user) {
        return res.status(404).json({
          error: true,
          message: "Account not found",
        });
      }

      if ((await user.authenticate(password)) === false) {
        return res.status(401).json({
          error: true,
          message: "Invalid credentials",
        });
      }

      //2. Throw error if account is not activated
      if (!user.active) {
        return res.status(400).json({
          error: true,
          message: "You must verify your email to activate your account",
        });
      }
      const { error, token } = await generateJwt(user.userId, user.role);
      if (error) {
        return res.status(500).json({
          error: true,
          message: "Couldn't create access token. Please try again later",
        });
      }
      res.cookie("token", token, { expire: new Date() + 9999 });
      return res.json({
        success: true,
        token: token,
        message: "User logged in successfully",
      });
    });
  } catch (err) {
    console.error("Login error", err);
    return res.status(500).json({
      error: true,
      message: "Couldn't login. Please try again later.",
    });
  }
};

exports.Activate = async (req, res) => {
  try {
    const { email, code } = req.body;
    if (!email || !code) {
      return res.json({
        error: true,
        status: 400,
        message: "Please make a valid request",
      });
    }
    const user = await User.findOne({
      email: email,
      emailToken: code,
      emailTokenExpires: { $gt: Date.now() }, // check if the code is expired
    });
    console.log(user);
    if (!user) {
      return res.status(400).json({
        error: true,
        message: "Invalid details",
      });
    } else {
      if (user.active)
        return res.send({
          error: true,
          message: "Account already activated",
          status: 400,
        });

      user.emailToken = "";
      user.emailTokenExpires = null;
      user.active = true;

      await user.save();

      return res.status(200).json({
        success: true,
        message: "Account activated.",
      });
    }
  } catch (error) {
    console.error("activation-error", error);
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

//PasswordReset Flow
exports.ForgotPassword = async (req,res) => {
  try {
    console.log(req.body)
    const { email } =await req.body;
    if (!email) {
      return res.send({
        status: 400,
        error: true,
        message: "Cannot be processed",
      });
    }
    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      return res.send({
        success: true,
        message:
          "If that email address is in our database, we will send you an email to reset your password",
      });
    }

    let code = Math.floor(100000 + Math.random() * 900000);
    let response = await sendMail(user.email, code);

    if (response.error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't send mail. Please try again later.",
      });
    }

    let expiry = Date.now() + 60 * 1000 * 15;
    user.resetPasswordToken = code;
    user.resetPasswordExpires = expiry; // 15 minutes

    await user.save();

    return res.send({
      success: true,
      message:
        "If that email address is in our database, we will send you an email to reset your password",
    });
  } catch (error) {
    console.error("forgot-password-error", error);
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

exports.ResetPassword = async (req, res) => {
  try {
    const { token, newPassword, confirmPassword } = req.body;
    if (!token || !newPassword || !confirmPassword) {
      return res.status(403).json({
        error: true,
        message:
          "Couldn't process request. Please provide all mandatory fields",
      });
    }
    const user = await User.findOne({
      resetPasswordToken: req.body.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.send({
        error: true,
        message: "Password reset token is invalid or has expired.",
      });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        error: true,
        message: "Passwords didn't match",
      });
    }

    user.hashed_password = await user.encryptPassword(req.body.newPassword);
    user.resetPasswordToken = null;
    user.resetPasswordExpires = "";

    await user.save();

    return res.send({
      success: true,
      message: "Password has been changed",
    });
  } catch (error) {
    console.error("reset-password-error", error);
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

exports.signout = (req, res) => {
  res.clearCookie("token");
  return res.json({
    success: true,
    message: "Signout Successful",
  });
};

exports.isAuth = (req, res, next) => {
  console.log("request Profile", req.profile)
  console.log("Request auth",req.auth)
  let user = req.profile && req.auth && req.profile.userId == req.auth.id;
  if (!user) {
    return res.status(403).json({
      error: true,
      message: "Access denied",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (!(req.profile.role === 0)) {
    return res.status(403).json({
      error: true,
      message: "Admin resource! Access denied",
    });
  }
  next();
};

exports.isShowroom = (req, res, next) => {
  if (!(req.profile.role === 1)) {
    return res.status(403).json({
      error: true,
      message: "Showroom resource! Access denied",
    });
  }
  next();
};

async function sendMail(email, code) {
  let subject = "Verification email";
  var body_html = `<!DOCTYPE> 
    <html>
      <body>
        <p>Your authentication code is : </p> <b>${code}</b>
      </body>
    </html>`;

  var emailInfo = {
    toEmail: email,
    subject: subject,
    body_html: body_html,
  };

  return await sendEmail(emailInfo);
}
