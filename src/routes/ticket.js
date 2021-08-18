const { Router } = require('express');
const ticketRouter = Router();

const ticketCtrl = require('../controllers/ticket');

// new ticket
ticketRouter.get('/ticket/add', ticketCtrl.renderTicket);
ticketRouter.post('/ticket/add', ticketCtrl.createNewTicket);

// get tickets
ticketRouter .get('/ticket', ticketCtrl.renderTickets);

module.exports = ticketRouter;