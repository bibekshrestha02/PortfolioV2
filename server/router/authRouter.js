const express = require("express");

const Router = express.Router();
const {
  login,
  signUp,
  changePassword,
  varification,
} = require("./../controller/authController");
Router.post("/login", login);
Router.post("/signup", signUp);
Router.patch("/updatePassword", varification, changePassword);

module.exports = Router;
