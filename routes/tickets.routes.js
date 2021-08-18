const { Router } = require('express');
const routerTicket = Router();

const Note = require('../models/ticket');

// TODO: Mejorar las rutas cuando todo funcione
routerTicket.get('/ticket/add', (req, res) => {
    res.render('tickets/newticket');
});

routerTicket.post('/ticket/add', (req, res) => {
    console.log(req.body);
    res.send('new ticket');
});

routerTicket.get('/ticket', (req, res) => {
    res.send('all tickets');
})

module.exports = routerTicket;