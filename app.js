'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const application = require('./routes/application');

// App
const app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true,
}));

app.use('/application', application);

app.listen(1200, '0.0.0.0');

console.log(`Running on http://1200:0.0.0.0`);