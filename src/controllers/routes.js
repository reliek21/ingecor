const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index', {
        title: 'Home'
    });
};

indexCtrl.renderLogin = (req, res) => {
    res.render('users/login', {
        title: 'Inicio Sesion'
    });
};

module.exports = indexCtrl;