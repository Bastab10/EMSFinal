// ================= IMPORTS =================

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const expressLayouts = require("express-ejs-layouts");


// ================= APP INIT =================

const app = express();


// ================= DATABASE =================

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log("Mongo Connected");
})
.catch((err)=>{
  console.log(err);
});


// ================= VIEW ENGINE =================

app.set("view engine","ejs");

app.set(
  "views",
  path.join(__dirname,"views")
);


// ================= MIDDLEWARE =================

app.use(express.urlencoded({
  extended:true
}));

app.use(
  express.static(
    path.join(__dirname,"public")
  )
);


// ================= LAYOUT SETUP =================

app.use(expressLayouts);

app.set(
  "layout",
  "layouts/boilerplate"
);


// ================= ROUTES =================

// User Auth Routes
const userRoutes =
require("./routes/user");

// Event Routes
const eventRoutes =
require("./routes/event");


// Route Use

app.use("/", userRoutes);

app.use("/events", eventRoutes);


// ================= SERVER =================

app.listen(8080, ()=>{

  console.log(
    "Server Running on 8080"
  );

});
