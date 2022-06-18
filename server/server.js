const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const userController = require('./controller.js');

const PORT = 3000;
const app = express();

const mongoURI = "mongodb+srv://jasminezalez:codesmith@cluster.nghpo.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(process.env.mongoURI || 'mongodb://localhost/3000');

mongoose.connection.once('open', () => {
    console.log('Connected to Database');
  });

app.use(express.json());
app.use(express.urlencoded());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client'))
    app.get('/', (req, res) )
}

app.use('/thoughts', thoughtController)

thoughtController.post('/', thoughtController.addWord, (req, res) => {
    res.status(200)
})

thoughtController.post('/', thoughtController.addWord, (req, res) => {
    res.status(200)
})

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));

