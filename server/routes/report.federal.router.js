const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

const fedQueryText = require('../modules/fed.report.query')

//Get for Federal Report
router.get("/", (req, res) => {
  if (req.isAuthenticated()  && req.user.user_type === true) { 
    
    // pool.query goes here
      let queryText = fedQueryText
      pool.query(queryText, [req.query.startDate, req.query.endDate])
      .then((result) => {
        console.log('GET fed reports success', result.rows);
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