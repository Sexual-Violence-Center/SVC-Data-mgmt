const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const makeCustomQuery = require('../modules/custom.report.function');
const customReportObject = require("../modules/custom.report.object");




//Get for Custom Report
// sample query
//http://localhost:5000/api/custom-report/?victim_ethnicity_asian=true&victim_gender_male=true&startDate=1999-01-01&endDate=2020-01-01
router.get("/", (req, res) => {
    if (req.isAuthenticated() && req.user.user_type === true) {
      //makeCustomQuery returns an object with query.queryText is the string and query.values where values is an array
      let query = makeCustomQuery(req.query, customReportObject );
        console.log(query);
      pool.query(query.queryText, query.values)
          .then((result)=>{              
              res.send(result.rows[0])
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


