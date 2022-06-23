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
// app.use(express.urlencoded());

// const thoughtRouter = express.Router();

app.use('/build', express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
    console.log("whatever")
    return res.status(200).sendFile(path.join(__dirname, '/index.html'));
  });

// app.use('/', thoughtRouter)
// app.use('/thoughts', thoughtController)
// thoughtRouter.post('/', thoughtController.addWord, (req, res)  => {
//     console.log("anything")
//     return res.status(201).json(res.locals.updatedCount);
// })

// thoughtController.get('/:word', thoughtController.getCount)

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

module.exports = app