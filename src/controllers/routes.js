const ticket = require("../models/ticket");

const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index', {
        title: 'Home'
    });
};

indexCtrl.renderLogin = (req, res) => {
    res.render('users/login', {
        title: 'Inicio sesion'
    });
};

indexCtrl.renderLoginAdmin = (req, res) => {
    res.render('users/login2', {
        title: 'Inicio sesion'
    });
};

indexCtrl.renderRegistro = (req, res) => {
    res.render('users/signup', {
        title: 'Registro'
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