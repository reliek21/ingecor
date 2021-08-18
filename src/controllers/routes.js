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

indexCtrl.renderLoginAdmin = (req, res) => {
    res.render('users/login2', {
        title: 'Inicio Sesion'
    });
};

indexCtrl.renderRegistro = (req, res) => {
    res.render('users/signup', {
        title: 'Registro'
    });
};

indexCtrl.renderUsuario = (req, res) => {
    res.render('users/usuario', {
        title: 'Home Usuarios'
    });
};

indexCtrl.renderAdmin = (req, res) => {
    res.render('users/admin', {
        title: 'Home Admin',
    });
};

// TODO: solucionar el error de compatibilidad en error
// indexCtrl.renderError = (req, res) => {
//     res.render('/error', {
//         title: 'Error 404'
//     });
// };

module.exports = indexCtrl;