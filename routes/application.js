const express = require('express');
const application = require('../services/application');

const router = express.Router();

router.get('/getSignedUrl', (req, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send('Something went wrong!');
  }
});


router.get('/upload', (req, res) => {
  const {
    firstname,
    lastname,
  } = req.body;

  res.sendStatus(200);
});

module.exports = router;
