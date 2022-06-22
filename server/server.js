const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const thoughtController = require('./controller.js');
require("dotenv").config()

const PORT = 3000;

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once('open', () => {
    console.log('Connected to Database');
  });

app.use(express.json());
app.use(express.urlencoded());

const thoughtRouter = express.Router();
app.use('/', thoughtRouter)


// if (process.env.NODE_ENV === 'production') {
//     shortcut to send html and css
//     app.use(express.static('client'))
//     // app.get('/', (req, res) )
//     //to distinguish 
// }

// app.use('/thoughts', thoughtController)

thoughtRouter.post('/', thoughtController.addWord, thoughtController.getCount)

// thoughtController.post('/', thoughtController.addCount, (req, res) => {
//     res.status(201).json(res.locals.count);
// })

// thoughtController.get('/:word', thoughtController.getCount, (req, res) => {
//     res.status(201).json(res.locals.totalCount);
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

