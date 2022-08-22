const mongoose = require('mongoose');

const { Schema } = mongoose;

const feedbackSchema = new Schema({
    message: {
        type: String,
        require: true,
        trim: false,
        maxlength: 2000,
    },
    email: {
        type: String,
        require: false,
    },
    apiKey: {
        type: String,
        require: false,
    },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
