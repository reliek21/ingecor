const userCtrl = {};

const passport = require('passport');

const User = require('../models/user');

userCtrl.renderLogin = (req, res) => {
    res.render('users/login', {
        title: 'Inicio sesion'
    });
};

userCtrl.login = passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/usuario',
    failureFlash: true
});

userCtrl.renderRegistro = (req, res) => {
    res.render('users/signup', {
        title: 'Registro'
    });
};

userCtrl.registro = async (req, res) => {
    const errors = [];
    const {
        name,
        lastname,
        company,
        addres,
        email,
        password
    } = req.body;
    if (password.length < 4) {
        errors.push({ text: 'La contraseña debe tener mas de 4 caracteres.' });
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            name,
            lastname,
            company,
            addres,
            email,
        });
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash('error_msg', 'El correo ya esta en uso');
            res.redirect('/registro');
        } else {
            const newUser = new User({
                name: name,
                lastname: lastname,
                company: company,
                addres: addres,
                email: email,
                password: password
            });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Ya estas registrado');
            res.redirect('/login');
        }
    }
};

userCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Cerraste sesión');
    res.redirect('users/login');
};



module.exports = userCtrl;