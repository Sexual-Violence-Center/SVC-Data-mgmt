const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// TODO make so only the admin can get the reports

//Get for Federal Report
router.get("/federal", (req, res) => {
  if (req.isAuthenticated()) {
    // pool.query goes here

    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});
//Get for County Report
router.get("/county", (req, res) => {
  if (req.isAuthenticated()) {
    // pool.query goes here

    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

//Get for Custom Report
router.get("/custom", (req, res) => {
  if (req.isAuthenticated()) {
    //pool.query for custom goes here

    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

module.exports =  router;