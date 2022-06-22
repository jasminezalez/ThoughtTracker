const mongoose = require('mongoose');
// const { number } = require('prop-types');
const Schema = mongoose.Schema;


//database will store all inputted words to track thoughts
const thoughtsSchema = new Schema({
    word: {type: String, required: true},
    count: {type: Number, required: true }
});

module.exports = mongoose.model('thoughts', thoughtsSchema);