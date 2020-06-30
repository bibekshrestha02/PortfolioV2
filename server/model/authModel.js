const mongoose = require("mongoose");
const brcypt = require("bcrypt");

const schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Enter Your name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Enter Your email"],
  },
  password: {
    type: String,
    required: [true, "Enter Your Password"],
  },
});

schema.pre("save", async function (next) {
  const bcryptPassword = await brcypt.hash(this.password, 10);
  this.password = bcryptPassword;
});

module.exports = mongoose.model("admin", schema);
