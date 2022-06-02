//DEPENDENCES
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const bigcats = require("../models/bigcatdb.js");

// NEW CAT ROUTE
router.get("/newBigCat", (req, res) => {
  console.log("Hit new cat route")
  res.render("new.ejs");
});

//CREATE CAT ROUTE
router.post("/", (req, res) => {
  console.log("Hit create route");
  let newCat = req.body;
  console.log(newCat);
  bigcats.push(newCat);
  console.log(bigcats);
  res.redirect("/bigcats")
});

//SHOW CAT ROUTE
router.get("/:bigCatIndex", (req, res) => {
  console.log("Hit show route");
  res.render("show.ejs", {oneBigCat: bigcats[req.params.bigCatIndex]});
});

//INDEX ROUTE
router.get("/", (req, res) => {
  console.log("Hit index route");
  res.render("index.ejs", {allBigCats: bigcats});
});

//DELETE ROUTE
router.delete("/:bigCatIndex", (req, res) => {
  console.log("Hit delete route");
  bigcats.splice(req.params.bigCatIndex, 1);
  res.redirect("/bigcats");
});

//EDIT PAGE
router.get("/:bigCatIndex/editBigCat", (req, res) => {
  console.log("Hit edit route")
  res.render("edit.ejs", 
  {oneBigCat: bigcats[req.params.bigCatIndex], 
  index: req.params.bigCatIndex})
});

router.put("/:bigCatIndex", (req, res) => {
  bigcats[req.params.bigCatIndex] = req.body;
  res.redirect(`/bigcats/${req.params.bigCatIndex}`)
});

module.exports = router;