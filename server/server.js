const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const userController = require('./controller.js');

const PORT = 3000;
const app = express();

const mongoURI = ""
mongoose.connect(mongoURI);

app.use(express.json());
app.use(express.urlencoded());

