const express = require('express');
const Feedback = require('../models/feedbacks');
const App = require('../models/app');

const router = express.Router();

const makeid = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random()
      * charactersLength));
  }
  return result;
};

router.post('/create/app', (req, res) => {
  const { appName } = req.body;
  const apiKey = makeid(20);

  const feedbackApp = new App({
    apiKey,
    appName,
  });

  feedbackApp.save().then((result) => {
    res.status(200).json({
      status: 'success',
      data: result,
    });
  }).catch((error) => {
    res.status(200).json({
      status: 'failure',
      message: error.message,
    });
  });
});

router.get('/list/app', (req, res) => {
  App.find().then((result) => {
    res.json({
      status: 'success',
      data: result,
    });
  }).catch((error) => {
    console.log(error);
  });
});

router.get('/detail/app/:id', (req, res) => {
  App.find({ apiKey: req.params.id }).then((result) => {
    res.json({
      status: 'success',
      data: result,
    });
  }).catch((error) => {
    res.status(200).json({
      status: 'failure',
      message: error.message,
    });
  });
});

router.post('/create/feedback', (req, res) => {
  const { message, email, apiKey } = req.body;
  const feedback = new Feedback({
    message,
    email,
    apiKey,
  });

  feedback.save().then((result) => {
    res.status(200).json({
      status: 'success',
      data: result,
    });
  }).catch((error) => {
    res.status(200).json({
      status: 'failure',
      message: error.message,
    });
  });
});

router.get('/list/feedbacks/:id', (req, res) => {
  Feedback.find({ apiKey: req.params.id }).then((result) => {
    res.json({
      status: 'success',
      data: result,
    });
  }).catch((error) => {
    res.status(200).json({
      status: 'failure',
      message: error.message,
    });
  });
});

module.exports = router;
