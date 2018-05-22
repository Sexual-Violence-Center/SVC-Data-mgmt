const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// TODO make so only the admin can get the reports

//Get for Federal Report
router.get("/", (req, res) => {
  if (req.isAuthenticated()  && req.user.user_type === true) {
    // pool.query goes here
      let queryText = `SELECT * FROM "victim" WHERE "contact_date" BETWEEN $1 AND $2;`
      pool.query(queryText, [req.body.startDate, req.body.endDate])
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