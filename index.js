const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

const router = require('./src/routes/routes');



// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// static content
app.use(express.static('public'));

// routes
app.use(router);

app.listen(port, () => {
    console.log(`Servidor en el puerto: ${port}`)
});