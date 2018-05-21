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
// TODO  change so only an admin can delete a form
router.delete('/:id', (req, res)=>{
    if(req.isAuthenticated()){
        //pool.query goes here
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
})

module.exports = router;