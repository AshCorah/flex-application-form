'use strict';

const express = require('express');
const authentication = require('./routes/auth');

// App
const app = express();


app.get('/', (req, res) => {
  res.send('Hello world\n');
});


app.listen(1200, '0.0.0.0');

console.log(`Running on http://${HOST}:${PORT}`);