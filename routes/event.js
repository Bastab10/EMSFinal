const { isLoggedIn } =
require("../middleware");

const express = require("express");
const router = express.Router();
const Event = require("../models/Event");


// ================= ALL EVENTS =================

router.get("/", async(req,res)=>{
  const events = await Event.find();
  res.render("events/index",{events});
});


// ================= NEW FORM =================

router.get("/new",(req,res)=>{
  res.render("events/new");
});


// ================= CREATE =================

router.post("/", async(req,res)=>{
  const event = new Event(req.body);
  await event.save();
  res.redirect("/events");
});


// ================= SHOW =================

router.get("/:id", async(req,res)=>{
  const event = await Event.findById(req.params.id);
  res.render("events/show",{event});
});


// ================= REGISTER (ADDED ONLY THIS) =================

router.get(
  "/:id/register",
  isLoggedIn,
  async(req,res)=>{

    // Abhi sirf redirect/auth test
    res.send("Event Registered");

});


// ================= EXPORT =================

module.exports = router;
