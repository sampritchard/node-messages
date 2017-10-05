const express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/Message');

const routes = require('./routes/index');

const app = express();

require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV.toUpperCase();

mongoose.connect(process.env[`DATABASE_${ENVIRONMENT}`])
mongoose.Promise = global.Promise;

app.set('port', process.env.PORT || 2005);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on PORT ${server.address().port}`)
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// module.exports = app;
// module.exports = mongoose;
