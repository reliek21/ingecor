const ticket = require("../models/ticket");
const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index', {
        title: 'Home'
    });
};

indexCtrl.renderUsuario = async (req, res) => {
    const tickets = await ticket.find().lean();
    res.render('users/usuario', {
        title: 'Home usuarios',
        tickets
    });
};

indexCtrl.renderAdmin = async (req, res) => {
    const tickets = await ticket.find().lean();
    res.render('users/admin', {
        title: 'Home admin',
        tickets
    });
};

module.exports = indexCtrl;