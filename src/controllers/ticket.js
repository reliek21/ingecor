const ticketCtrl = {};

ticketCtrl.renderTicket = (req, res) => {
    res.render('tickets/newticket');
};

ticketCtrl.createNewTicket = (req, res) => {
    console.log(req.body);
    res.send('new note');
};

ticketCtrl.renderTickets = (req, res) => {
    res.send('render notes');
};

module.exports = ticketCtrl;