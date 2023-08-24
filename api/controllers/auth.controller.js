const expressAsyncHandler = require("express-async-handler");
const usersModel = require("../models/auth.model");

const LoginController = expressAsyncHandler(async (req, res, next) => {
  try {
    await usersModel.find();
    res.json({
      success: true,
    });
  } catch (err) {}
});

const SignupController = expressAsyncHandler(async (req, res, next) => {
  const { id, username, email, password } = req.body;

  // If email already exists
  // if(){
  //   res.status(400);
  //   throw new Error("Email already exists");
  // }

  try {
    res.json({
      success: true,
      message: "Enter the otp",
    });
  } catch (err) {
    res.status(400);
    next(err, req, res);
  }
});

const LogoutController = expressAsyncHandler(async (req, res, next) => {});

const VerifyOtpController = expressAsyncHandler(async (req, res, next) => {});

module.exports = {
  LoginController,
  SignupController,
  LogoutController,
  VerifyOtpController,
};
