const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup form
router.get("/signup",(req,res)=>{
  res.render("users/signup");
});

// Signup post
router.post("/signup", async(req,res)=>{
  const user = new User(req.body);
  await user.save();
  res.redirect("/login");
});

// Login form
router.get("/login",(req,res)=>{
  res.render("users/login");
});

// Login post
router.post("/login", async(req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email,password});
  if(user){
    res.redirect("/events");
  }else{
    res.send("Invalid Credentials");
  }
});

module.exports = router;
