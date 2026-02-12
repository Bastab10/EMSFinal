const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname:String,
  email:String,
  collegeId:String,
  role:String,
  branch:String,
  year:String,
  section:String,
  phone:String,
  password:String
});

module.exports = mongoose.model("User", userSchema);
