const express = require('express');
const feedbacky = require('./feedbacky');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/feedbacky', feedbacky);

module.exports = router;
