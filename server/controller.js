const { use } = require('express/lib/application');
const Thought = require('./model');

const thoughtController = {}

thoughtController.addWord = (req, res, next) => {
    // add thoughts (a word) to the database
    // check if word exists in the database
    // if it exists, update it, otherwise create it 
     const { word } = req.body;
    Thought.findOneAndUpdate( { word: word }, {$inc:{count:1}}, { returnDocument: 'after', upsert: true })
    .then((thoughtData) => {
            // if (!thoughtData) return next({ message: 'Thought has not been created'})
            // // update count key, increment by 1
            res.locals.updatedCount = thoughtData
            // // must return response
            console.log(res.locals.updatedCount)
            return next()
    })

        // .catch((err) => {
        // return next({ 
        //   log: 'addWord',
        //   status: 400,
        //   message: { err: 'inside of addWord middleware inside of controller.js'}
        // });
}




// thoughtController.updateCount = (req, res, next) => {
//     console.log(req.params);
//     // the count won't be on req.params
//     const { word } = req.params;
    

// }



// I need a controller to flag multipleWords

// We noticed you have use the word "string" a lot. This could be something to investigate. 
// Thought patterns are common ways of thinking we carry with us throughout our lives
// If we can catch them and become aware of them, we can observe them and not allow them to affect us

module.exports = thoughtController;