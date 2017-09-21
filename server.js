'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const artistsRouter = require('./routes/artists');
const authRouter = require('./routes/login.js');

const passport = require('./middleware/auth');

const app = express();

app.set('view engine', 'pug');

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use('/', artistsRouter);
app.use('/', authRouter);

app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, function () {
  console.log('app listen');
});

