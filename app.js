'use strict';

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const assets = require('./client/build/asset-manifest.json');

console.log('Starting service...');

// routes
const application = require('./routes/application');
const index = require('./routes/index');

// App
const app = express();

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');
app.engine('html', hbs.__express); // eslint-disable-line no-underscore-dangle

// middleware setup
app.use(favicon(path.join(__dirname, 'client/build/favicon.ico')));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true,
}));
app.use('/static', express.static(path.join(__dirname, 'client/build/static')));

// expose static assets to views
app.locals.assets = {
  mainCss: assets['main.css'],
  mainJs: assets['main.js'],
};

// routes setup
app.use('/application', application);
app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

app.listen(1200, () => console.log(`Listening on port 1200`));
