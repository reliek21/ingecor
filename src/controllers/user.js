const userCtrl = {};

userCtrl.renderLogin = (req, res) => {
    res.render('users/login', {
        title: 'Inicio sesion'
    });
};

userCtrl.login = (req, res) => {
    res.send('Inicio sesion');
};

userCtrl.renderLoginAdmin = (req, res) => {
    res.render('users/login2', {
        title: 'Inicio Admin'
    });
};

userCtrl.loginAdmin = (req, res) => {
    res.send('LoginAdmin');
};

userCtrl.renderRegistro = (req, res) => {
    res.render('users/signup', {
        title: 'Registro'
    });
};

userCtrl.registro = (req, res) => {
    res.send('Registro');
};

userCtrl.logout = (req, res) => {
    res.send('logut');
};



module.exports = userCtrl;