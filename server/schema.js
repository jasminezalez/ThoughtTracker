const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//database will store all inputted words to track thoughts
const thoughtsSchema = newSchema({
    words: {type: String, required: true}
})

module.exports = mongoose.model('thoughts', thoughtsSchema)