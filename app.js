'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const react = require('./client/build/asset-manifest.json');

// routes
const application = require('./routes/application');

// App
const app = express();

app.locals.assets = {
  mainCss: `/client/build/${react['main.css']}`,
  mainJs: `/client/build/${react['main.js']}`,
};

console.log('Starting service...');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true,
}));

app.use('/application', application);

app.listen(1200, () => console.log(`Listening on port 1200`));
