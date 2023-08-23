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

const SignupController = expressAsyncHandler(async (req, res, next) => {});

const LogoutController = expressAsyncHandler(async (req, res, next) => {});

module.exports = {
  LoginController,
  SignupController,
  LogoutController,
};
