const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

const app = express();

require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV.toUpperCase();

mongoose.connect(process.env[`DATABASE_${ENVIRONMENT}`])
mongoose.Promise = global.Promise;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.set('port', process.env.PORT || 2005);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on PORT ${server.address().port}`)
})

app.use('/', routes);

module.exports = app;
