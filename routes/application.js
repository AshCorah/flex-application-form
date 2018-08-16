const express = require('express');
const applicationService = require('../services/application');

const router = express.Router();

router.post('/uploadToDb', async (req, res) => {
  try {
    await applicationService.uploadToDb(req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
