'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const artistsRouter = require('./routes/artists');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', artistsRouter);

app.listen(3000, function () {
  console.log('app listen');
});

