const { use } = require('express/lib/application');
// we are requiring our studnetmodel
const Student = require('./model.js');

const thoughtController = {}

thoughtController.addWord = (req, res, next) => {
    // add thoughts to the database

}

thoughtController.multipleWords = (req, res, next) => {
    // check to see how many times the current word exists in the database

}

