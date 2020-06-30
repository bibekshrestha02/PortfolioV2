const express = require("express");
const {
  getDetails,
  postDetails,
  updateDetails,
  updatePhoto,
} = require("./../controller/detailsController");
const multer = require("multer");
const { varification } = require("./../controller/authController");

const Router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/Images");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

Router.route("/")
  .get(getDetails)
  .post(varification, postDetails)
  .put(varification, upload.single("profile"), updatePhoto)
  .patch(varification, updateDetails);
module.exports = Router;
