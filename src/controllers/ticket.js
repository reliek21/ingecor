const ticketCtrl = {};

const Ticket = require('../models/ticket');

ticketCtrl.renderTicket = (req, res) => {
    res.render('tickets/newticket', {
        title: 'Nuevo Ticket'
    });
};

ticketCtrl.createNewTicket = async (req, res) => {
    const {
        type,
        description,
        state,
        personal,
        area,
        name
    } = req.body;
    const newTicket = new Ticket({
        type: type,
        description: description,
        state: state,
        personal: personal,
        area: area,
        name: name
    });
    await newTicket.save();
    res.send('new note');
};

ticketCtrl.renderTickets = async (req, res) => {
    const tickets = await Ticket.find().lean();
    res.render('tickets/alltickets', { tickets });
};

module.exports = ticketCtrl;