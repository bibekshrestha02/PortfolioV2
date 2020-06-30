const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  introduction: {
    type: Array,
  },
  tags: {
    type: String,
  },
  introDetails: {
    type: String,
  },
  about: {
    type: String,
  },
  skills: {
    type: Array,
  },
  projects: {
    type: Array,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("details", schema);
