'use strict';

const express = require('express');
const router = express.Router();

const passport = require('../middleware/auth');

router.get('/login', function (req, res) {
  res.render('login');
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/user');
  });

router.get('/user', (req, res) => {
  res.send('user');
});

module.exports = router;