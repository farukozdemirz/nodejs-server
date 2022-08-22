const mongoose = require('mongoose');

const { Schema } = mongoose;

const appSchema = new Schema({
    apiKey: {
        type: String,
        require: false,
        minlength: 10
    },
    appName: {
        type: String,
        require: true,
        minlength: 3
    },
});

const App = mongoose.model('App', appSchema);
module.exports = App;
