const { Router } = require('express');
const ticketRouter = Router();

const ticketCtrl = require('../controllers/ticket');

// new ticket
ticketRouter.get('/add', ticketCtrl.renderTicket);
ticketRouter.post('/add', ticketCtrl.createNewTicket);

// get tickets
ticketRouter.get('/tickets', ticketCtrl.renderTickets);

// edit tickets
ticketRouter.get('/edit/:id', ticketCtrl.renderEditForm);
ticketRouter.put('/edit/:id', ticketCtrl.renderUpdateTicket);


module.exports = ticketRouter;