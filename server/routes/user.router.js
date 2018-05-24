const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Project file that handles Ajax request for user information confirming if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from database
  res.send(req.user);
});

// GET request for list of users in the person table. List displays username and user_type on the UserEnterPage (along with a delete button)
router.get('/users', (req, res) => {
  console.log('in admin-only backend GET for user list on UserEntryPage');
  if(req.isAuthenticated() && req.user.user_type === true) {
    let queryText = 'SELECT id, username, user_type FROM person;';
    pool.query(queryText)
    .then((result) => {
      console.log('user.router result.rows', result.rows);
        res.send(result.rows);
    }).catch((error) => {
      console.log('error in user.get, server side', error);
      res.sendStatus(500);
    })
  } else {
    res.sendStatus(403);
  }
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
//TODO: this is the standard project file--we should comment this out or delete it before deployment
// router.post('/register', (req, res, next) => {
//   const username = req.body.username;
//   const password = encryptLib.encryptPassword(req.body.password);
//   const queryText = 'INSERT INTO person (username, password) VALUES ($1, $2) RETURNING id';
//   pool.query(queryText, [username, password])
//     .then(() => { res.sendStatus(201); })
//     .catch((err) => { next(err); });
// });

//Handles POST request for Admin to create a new user from the UserEntryPage
//TODO: the standard register route (above) shoud be disabled when development reaches
//the stage where we no longer need the flexibility of having the standard registration process
router.post('/register/new', (req, res, next) => {
  console.log('In admin-only backend post route for adding new user on UserEntryPage:', req.user);
  if(req.isAuthenticated() && req.user.user_type === true) {
    console.log('req in new user post:', req.body);
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const user_type = req.body.user_type;
  const queryText = 'INSERT INTO person (username, password, user_type) VALUES ($1, $2, $3) RETURNING id;';
  pool.query(queryText, [username, password, user_type])
    .then(() => { res.sendStatus(201); })
    .catch((err) => { res.sendStatus(500); });
  } else {
    res.sendStatus(403);
  }
});

//Handles DELETE request of existing user on UserEntryPage
//Only a logged-in admin can delete a user (in db person table, user_type is boolean; true = admin; false = user)
router.delete('/:id', (req, res) => {
  console.log('In admin-only backend delete route for current user list on UserEntryPage, req.params is:', req.params);
  if(req.isAuthenticated() && req.user.user_type === true) {
    let queryText = 'DELETE FROM "person" WHERE id = $1;';
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

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.get('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
