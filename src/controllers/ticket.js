const ticketCtrl = {};

const Ticket = require('../models/ticket');
require('../config/passport')

ticketCtrl.renderTicket = (req, res) => {
    console.log(req.user);
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
    } = req.body;
    const newTicket = new Ticket({
        type: type,
        description: description,
        status: status,
        area: area,
        name: name,
    });
    newTicket.user = req.user.id;
    await newTicket.save();
    req.flash('success_msg', 'Ticket agregado con exito!');
    res.redirect('/usuario');
};

ticketCtrl.renderTickets = async (req, res) => {
    const tickets = await Ticket.find({ user: req.user.id }).lean();
    res.render('tickets/alltickets', {
        title: 'Tickets',
        tickets,
    });
};

ticketCtrl.renderEditForm = async (req, res) => {
    const ticket = await Ticket.findById(req.params.id).lean();
    if (ticket.user != req.user.id) {
        req.flash('error_msg', 'No estas autorizado');
        return res.redirect('/usuario');
    }
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
    } = req.body;
    await Ticket.findByIdAndUpdate(req.params.id, {
        type: type,
        description: description,
        status: status,
        area: area,
        name: name,
    });
    req.flash('success_msg', 'Ticket editado con exito!');
    res.redirect('/admin');
};

module.exports = ticketCtrl;