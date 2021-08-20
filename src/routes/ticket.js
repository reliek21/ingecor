const { Router } = require('express');
const ticketRouter = Router();

const ticketCtrl = require('../controllers/ticket');

// auth user
const auth = require('../helpers/auth');

// new ticket
ticketRouter.get('/add', auth.isAuthenticated, ticketCtrl.renderTicket);
ticketRouter.post('/add', auth.isAuthenticated, ticketCtrl.createNewTicket);

// get tickets
ticketRouter.get('/tickets', auth.isAuthenticated, ticketCtrl.renderTickets);

// edit tickets
ticketRouter.get('/edit/:id', auth.isAuthenticated, ticketCtrl.renderEditForm);
ticketRouter.put('/edit/:id', auth.isAuthenticated, ticketCtrl.renderUpdateTicket);


module.exports = ticketRouter;