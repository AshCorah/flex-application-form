const express = require('express');
const applicationService = require('../services/application');

const router = express.Router();

router.post('/upload', async (req, res) => {
  console.log('HIT')
  try {
    await applicationService.uploadToDb(req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/signedUrl', async (req, res) => {
  try {
    const url = await applicationService.requestSignedUrl();
    const json = JSON.parse(url);
    res.status(200).send(json.signedUrl);
  } catch (error) {
    res.status(500).send('Something went wrong!');
  }
});

module.exports = router;
