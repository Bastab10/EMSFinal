const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const expressLayouts = require("express-ejs-layouts");

const app = express();

// MongoDB
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Mongo Connected"))
.catch(err => console.log(err));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

// Layout setup
app.use(expressLayouts);
app.set("layout","layouts/boilerplate");

// Routes
const userRoutes = require("./routes/user");
const eventRoutes = require("./routes/event");

app.use("/",userRoutes);
app.use("/events",eventRoutes);

app.listen(3000,()=>{
  console.log("Server Running on 3000");
});
