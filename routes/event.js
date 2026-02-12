const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// All events
router.get("/", async(req,res)=>{
  const events = await Event.find();
  res.render("events/index",{events});
});

// New form
router.get("/new",(req,res)=>{
  res.render("events/new");
});

// Create
router.post("/", async(req,res)=>{
  const event = new Event(req.body);
  await event.save();
  res.redirect("/events");
});

// Show
router.get("/:id", async(req,res)=>{
  const event = await Event.findById(req.params.id);
  res.render("events/show",{event});
});

module.exports = router;
