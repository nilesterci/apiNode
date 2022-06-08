const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const defaultRoute = require('./routes/defaultRoute');
app.use('/', index);
app.use('/persons', defaultRoute);
module.exports = app;