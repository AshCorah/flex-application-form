'use strict';

const express = require('express');
const application = require('./routes/application');

// App
const app = express();

app.use('/application', application);

app.listen(1200, '0.0.0.0');

console.log(`Running on http://${HOST}:${PORT}`);