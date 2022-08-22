const mongoose = require('mongoose');
const app = require('./app');

const dbURL = 'mongodb+srv://farukozdemirz:bhathu123F@cluster0.kr1ix6u.mongodb.net/?retryWrites=true&w=majority';

const port = process.env.PORT || 5000;

mongoose.connect(dbURL).then(() => {
  app.listen(port, () => {
    console.log('server');
  });
});
