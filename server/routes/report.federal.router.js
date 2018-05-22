const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

const fedQueryText = require('./fed-report-query-text');

// TODO make so only the admin can get the reports

//Get for Federal Report
router.get("/", (req, res) => {
  if (req.isAuthenticated()  && req.user.user_type === true) {
    console.log('in GET federal reports', req.query.startDate, req.query.endDate);
    
    // pool.query goes here
      let queryText = fedQueryText
      pool.query(queryText, [req.query.startDate, req.query.endDate])
      .then((result) => {
        console.log('GET fed reports success', result);
        res.send(result.rows)
      }).catch((error) => {
        console.log('error in GET fed reports', error);
        res.sendStatus(500);
      })
  } else {
      res.sendStatus(403);
  }
});

module.exports =  router;