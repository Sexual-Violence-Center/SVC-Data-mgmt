const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const postQueryText = require('../modules/makePostQuery');


//Post victim to db
router.post('/', (req, res) => {
    if(req.isAuthenticated()){
        const query = postQueryText(req.body);
        pool.query(query.queryText, query.values)
        
        .then((result)=>{
            res.send(result.rows[0])
        })
        .catch((error)=>{
            console.log('error in post ', error);
            res.sendStatus(500)
        })

    } else {
        res.sendStatus(403);
    }
});

//Put route for victim 
// TODO change so only admin can change a form
router.put('/:id', (req, res)=>{
    //will want to change this so only the admin can update a form
    if(req.isAuthenticated()){



        //pool.query goes here
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
})

//Delete route for a victim form
// Only a logged-in admin can delete a form (in db person table, user_type is boolean; true = admin; false = user)
router.delete('/:id', (req, res) => {
    // console.log('authenticated user DELETE server route for Archive Page, req.params is:', req.params);
    if(req.isAuthenticated() && req.user.user_type === true) {
      let queryText = 'DELETE FROM "victim" WHERE id = $1;';
      pool.query(queryText, [req.params.id])
      .then((result) => {
        console.log('DELETE successful', result);
          res.sendStatus(200);
      }).catch((error) => {
        console.log('error in DELETE, server side', error);
        res.sendStatus(500);
      })
    } else {
      res.sendStatus(403);
    }
  });

module.exports = router;