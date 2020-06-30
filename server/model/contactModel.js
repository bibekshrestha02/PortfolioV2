const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Enter Your email"],
  },
  name: {
    type: String,
    required: [true, "Enter Your name"],
  },
  message: {
    type: String,
    required: [true, "Enter Your Message"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("contact", schema);
