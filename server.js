//DEPENDENCIES
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const PORT = 3000;
const bigCatController = require("./controllers/bigcatcontroller.js");

//MIDDLEWARE
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));

//INITIALIZING CONTROLLER (ALWAYS PLACE AFTER MIDDLWARE)
app.use("/bigcats", bigCatController);

//LISTENER
app.listen(PORT, () => {
  console.log("Listening for big cats on PORT:" + PORT)
});