const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const makeCustomQuery = require('../modules/custom.report.function');
const customReportObject = require("../modules/custom.report.object");




//Get for Custom Report
router.get("/", (req, res) => {
    if (req.isAuthenticated() && req.user.user_type === true) {
      //pool.query for custom goes here
      let query = makeCustomQuery(req.query, customReportObject );

      pool.query(query.queryText, query.values)
          .then((result)=>{
              res.send(result.rows)
          })
          .catch((error)=>{
              console.log('an error in router custom ', error);
              res.sendStatus(500);
          })

    } else {
      res.sendStatus(403);
    }
});

module.exports = router;


