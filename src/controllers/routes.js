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

indexCtrl.renderUsuario = (req, res) => {
    res.render('users/usuario', {
        title: 'Home usuarios'
    });
};

indexCtrl.renderAdmin = (req, res) => {
    res.render('users/admin', {
        title: 'Home admin',
    });
};

// TODO: solucionar el error de compatibilidad de la pagina 404
// indexCtrl.renderError = (req, res) => {
//     res.render('/error', {
//         title: 'Error 404'
//     });
// };

module.exports = indexCtrl;