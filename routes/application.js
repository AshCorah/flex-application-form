const express = require('express');
const applicationService = require('../services/application');

const router = express.Router();

router.post('/upload', async (req, res) => {
  try {
    //const signedUrl = await applicationService.requestSignedUrl();
    await applicationService.uploadToDb(req.body);

    res.sendStatus(200);
  } catch (error) {
    res.status(500).send('Something went wrong!');
  }
});

module.exports = router;
