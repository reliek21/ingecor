const { Router } = require('express');
const ticketRouter = Router();

const ticketCtrl = require('../controllers/ticket');

// new ticket
ticketRouter.get('/add', ticketCtrl.renderTicket);
ticketRouter.post('/add', ticketCtrl.createNewTicket);

// get tickets
ticketRouter.get('/tickets', ticketCtrl.renderTickets);

module.exports = ticketRouter;