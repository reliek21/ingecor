require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

require('./server/database');

// Variables de entorno
require('dotenv').config();

const app = express();

const router = require('./routes/routes');

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// static content
app.use(express.static('public'));

// routes
app.use(router);

// server
app.listen(process.env.PORT, () => {
    console.log(`Servidor en el puerto: ${process.env.PORT}`)
});