const { use } = require('express/lib/application');
const Thought = require('./model');

const thoughtController = {}

thoughtController.addWord = (req, res, next) => {
    // add thoughts (a word) to the database
    // check if word exists
    // if it does, invoke next()
    console.log(req.body)
    const { word, count } = req.body;
    Thought.create( { word, count } )
    .then((wordData) => {
        res.locals.word = wordData;
        console.log(res.locals.word)
        res.status(201).json(res.locals.word);
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
   
// if they type it
// }
thoughtController.getCount = (req, res, next) => {
    console.log(req.params);
    const { word } = req.params;
    Thought.findOneAndUpdate( { word } )
    .then((thoughtData) => {
        if (!thoughtData) return next({ message: 'Thought has not been created'})
        // update count key, increment by 1
        // must return response
    })

}

// I need a controller to flag multipleWords

// We noticed you have use the word "string" a lot. This could be something to investigate. 
// Thought patterns are common ways of thinking we carry with us throughout our lives
// If we can catch them and become aware of them, we can observe them and not allow them to affect us

module.exports = thoughtController;