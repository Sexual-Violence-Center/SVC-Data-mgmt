
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const victimRouter = require('./routes/victim.router');
const FedReportRouter= require('./routes/report.federal.router');
const CountyReportRouter = require('./routes/report.county.router');
const CustomReportRouter = require('./routes/report.custom.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/victim', victimRouter);
app.use('/api/fed-report', FedReportRouter);
app.use('/api/county-report', CountyReportRouter);
app.use('/api/custom-report', CustomReportRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
