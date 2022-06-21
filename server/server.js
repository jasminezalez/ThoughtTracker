const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const thoughtController = require('./controller.js');

const PORT = 3000;

const mongoURI = "mongodb+srv://jasminezalez:codesmith@cluster.nghpo.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(process.env.mongoURI || 'mongodb://localhost/3000');

mongoose.connection.once('open', () => {
    console.log('Connected to Database');
  });

app.use(express.json());
app.use(express.urlencoded());

const thoughtRouter = express.Router();
app.use('/', thoughtRouter)


// if(process.env.NODE_ENV === 'production') {
    // shortcut to send html and css
//     app.use(express.static('client'))
//     // app.get('/', (req, res) )
// }

// app.use('/thoughts', thoughtController)

thoughtRouter.post('/', thoughtController.addWord, (req, res) => {
    res.status(201).json(res.locals.word);
})

// thoughtController.post('/', thoughtController.addCount, (req, res) => {
//     res.status(201).json(res.locals.count);
// })

// Global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));

