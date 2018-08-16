const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Flex Application Form' });
});

module.exports = router;