const ticketCtrl = {};

const Ticket = require('../models/ticket');

ticketCtrl.renderTicket = (req, res) => {
    res.render('tickets/newticket', {
        title: 'Nuevo ticket'
    });
};

ticketCtrl.createNewTicket = async (req, res) => {
    const {
        type,
        description,
        status,
        area,
        name,
        date
    } = req.body;
    const newTicket = new Ticket({
        type: type,
        description: description,
        status: status,
        area: area,
        name: name,
        date: date
    });
    await newTicket.save();
    res.redirect('/tickets');
};

ticketCtrl.renderTickets = async (req, res) => {
    const tickets = await Ticket.find().lean();
    res.render('tickets/alltickets', {
        title: 'Tickets',
        tickets,
    });
};

ticketCtrl.renderEditForm = async (req, res) => {
    const ticket = await Ticket.findById(req.params.id).lean();
    res.render('tickets/edit', {
        title: 'Asignar ticket',
        ticket: ticket
    });
};

ticketCtrl.renderUpdateTicket = async (req, res) => {
    const {
        type,
        description,
        status,
        area,
        name,
        date
    } = req.body;
    await Ticket.findByIdAndUpdate(req.params.id, {
        type: type,
        description: description,
        status: status,
        area: area,
        name: name,
        date: date
    });
    res.redirect('/tickets');
};

module.exports = ticketCtrl;