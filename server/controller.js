const { use } = require('express/lib/application');
const Thought = require('./model');

const thoughtController = {}

thoughtController.addWord = (req, res, next) => {
    // add thoughts (a word) to the database
    console.log(req.body)
    const { word, count } = req.body;
    Thought.create( { word, count } )
    .then((wordData) => {
        res.locals.word = wordData;
        return next();
    })
    .catch((err) => {
        return next({ 
          log: 'addWord',
          status: 400,
          message: { err: 'inside of addWord middleware inside of controller.js'}
        });
      });

}

// thoughtController.multipleWord.addCount = (req, res, next) => {
//     // check to see how many times the current word exists in the database
   

// }

// I need a controller to flag multipleWords

// We noticed you have use the word "string" a lot. This could be something to investigate. 
// Thought patterns are common ways of thinking we carry with us throughout our lives
// If we can catch them and become aware of them, we can observe them and not allow them to affect us

module.exports = thoughtController;