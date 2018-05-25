const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const postQueryText = require('../modules/makePostQuery');
const makePutQuery = require('../modules/makePutQuery')


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
//expects id to also be part of the req.body 
//http://localhost:5000/api/victim/9
router.put('/:id', (req, res)=>{
    
    if (req.isAuthenticated() && req.user.user_type === true) {
      //function takes in req.body(id is part of body)
      //returns the query string and an array of the values
      const queryText = makePutQuery(req.body)
      pool.query(queryText.query, queryText.values)
          .then((result)=>{
              res.sendStatus(200);
          })
          .catch((error)=>{
              res.sendStatus(500)
          })

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

router.get('/:id', (req, res)=>{
    if(req.isAuthenticated() && req.user.user_type === true){
        let queryText = 'SELECT * FROM "victim" WHERE id = $1;';
        pool.query(queryText, [req.params.id])
            .then((result)=>{
                res.send(result.rows);
            })
            .catch((error)=>{
                console.log('error in get form server ', error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})

module.exports = router;