// TODO: Mejora y dividir este archivo cuando todo funcione
require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('./server/database');

// Variables de entorno
require('dotenv').config();

const app = express();


// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// static content
app.use(express.static('public'));

// routes
app.use(require('./routes/routes'));
app.use(require('./routes/tickets.routes'));

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

// server
app.listen(process.env.PORT, () => {
    console.log(`Sever in the port: ${process.env.PORT}`)
});