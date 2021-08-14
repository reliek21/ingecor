const express = require('express');
const path = require('path');
const app = express();


// setting
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes/routes'));

// static files

// escuchando el servidor
app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto", app.get('port'));
});