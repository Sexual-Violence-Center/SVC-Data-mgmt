const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const queryText = require("../modules/county.report.query");

// TODO make so only the admin can get the reports

//Get for County Report
router.get("/", (req, res) => {
    //only an admin can get the report
    if (req.isAuthenticated() && req.user.user_type === true) {
      // pool.query goes here
      //example query
      ///api/county-report/?county=Hennepin&startDate=1999-01-01&endDate=2020-01-01
      //expects querys for county startDate and endDate
      pool
        .query(queryText, [
          req.query.county,
          req.query.startDate,
          req.query.endDate
        ])
        .then(result => {
          //result is an array with length one
          res.send(result.rows[0]);
        })
        .catch(error => {
          console.log(error);
          res.sendStatus(500);
        });
    } else {
      res.sendStatus(403);
    }
});


module.exports = router;