//DEPENDENCES
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const bigcats = require("../models/bigcatdb.js");

// NEW CAT ROUTE
router.get("/newBigCat", (req, res) => {
  res.render("new.ejs");
});

//CREATE CAT ROUTE
router.post("/", (req, res) => {
  let newCat = req.body;
  bigcats.push(newCat);
  res.redirect("/bigcats")
});

//SHOW CAT ROUTE
router.get("/:bigCatIndex", (req, res) => {
  res.render("show.ejs", {oneBigCat: bigcats[req.params.bigCatIndex]});
});

//INDEX ROUTE
router.get("/", (req, res) => {
  res.render("index.ejs", {allBigCats: bigcats});
});

//DELETE ROUTE
router.delete("/:bigCatIndex", (req, res) => {
  bigcats.splice(req.params.bigCatIndex, 1);
  res.redirect("/bigcats");
});

//EDIT PAGE
router.get("/:bigCatIndex/editBigCat", (req, res) => {
  const context = {
    oneBigCat: bigcats[req.params.bigCatIndex], 
    index: req.params.bigCatIndex,
  }
  res.render("edit.ejs", context)
});

router.put("/:bigCatIndex", (req, res) => {
  bigcats[req.params.bigCatIndex] = req.body;
  res.redirect(`/bigcats/${req.params.bigCatIndex}`)
});

module.exports = router;