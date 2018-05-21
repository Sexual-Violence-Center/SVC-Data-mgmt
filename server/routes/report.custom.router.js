const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// TODO make so only the admin can get the reports

//Get for Custom Report
router.get("/custom", (req, res) => {
    if (req.isAuthenticated()) {
        //pool.query for custom goes here

        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;