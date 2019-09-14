const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


// Server
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routers
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

// Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);

// Disabling some response fields
app.disable("x-powered-by");

// Server listening
app.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("Server is up and running on http://localhost:3000");
})