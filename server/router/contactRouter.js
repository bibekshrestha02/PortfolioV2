const express = require("express");

const Router = express.Router();
const {
  getMessage,
  deleteMessage,
  postMessage,
} = require("../controller/contactController");
const { varification } = require("../controller/authController");
Router.route("/").get(varification, getMessage).post(postMessage);
Router.route("/:id").delete(deleteMessage);

module.exports = Router;
