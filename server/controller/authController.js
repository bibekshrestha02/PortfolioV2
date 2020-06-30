const AuthModel = require("./../model/authModel");
const bcrypt = require("bcrypt");
const jsonWebToken = require("jsonwebtoken");
exports.signUp = async (req, res) => {
  try {
    // 1) getting the name, email, password
    const { email, password, name } = req.body;
    // 2) saving the details by hashing the password
    await AuthModel.create({
      email: email,
      password: password,
      name: name,
    });
    // 3) sending the message of success
    res.json({ status: true });
  } catch (error) {
    res.json({ status: false });
  }
};
exports.login = async (req, res) => {
  try {
    // 1.) geting the email and password
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        status: false,
        message: "Enter Email or Password",
      });
    }
    // 2. checking the email
    const status = await AuthModel.findOne({ email: email });
    if (!status || !(await bcrypt.compare(password, status.password))) {
      return res.json({
        status: false,
        message: "Invalid Email or password",
      });
    }
    // 4.generating the token
    const token = jsonWebToken.sign(
      { id: status._id },
      process.env.SECRECT_KEY
    );
    res.json({ status: true, token });
  } catch (error) {
    res.json({ status: false });
  }
};
// changing the password
exports.changePassword = async (req, res) => {
  try {
    const { oldPassword } = req.body;
    const { newPassword } = req.body;
    const { conformPassword } = req.body;
    const userId = res.id;
    // 0.checking the password
    if (!oldPassword || !newPassword || !conformPassword) {
      throw "Fill up the form";
    }
    if (newPassword !== conformPassword) {
      throw "new password doesn't match";
    }
    // 1. checking the orginal password
    const bcryptPassword = await AuthModel.findById(
      { _id: userId },
      { password: 1 }
    );

    if (!(await bcrypt.compare(oldPassword, bcryptPassword.password))) {
      throw "Current Password doesn't match";
    }
    // 2. updating the password
    const result = await AuthModel.findOne({ _id: userId });
    result.password = newPassword;
    await result.save();
    res.json({
      status: true,
      message: "Password Updated",
    });
  } catch (error) {
    res.json({ status: false, message: error });
  }
};
// varification
exports.varification = async (req, res, next) => {
  try {
    // 1.) checking if token exists
    if (!req.headers.authorization) {
      return res.json({ status: false, message: "You are not varified" });
    }
    const token = req.headers.authorization.split(" ")[1];
    // 2. checking the token
    const status = jsonWebToken.verify(token, process.env.SECRECT_KEY);
    // 3. sending the email and name of admin
    const data = await AuthModel.findOne({ _id: status.id });
    res.email = data.email;
    res.name = data.name;
    res.id = data._id;
    next();
  } catch (error) {
    res.json({ status: false, message: "You dont have access" });
  }
};
