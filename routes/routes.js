const express = require('express');
const router = express.Router();

// TODO: Cambiar todas las rutas a index controller

// routes
router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home'
    });
});

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login',
    });
});

router.get('/loginadmin', (req, res) => {
    res.render('login2', {
        title: 'Login Admin',
    });
});

router.get('/registro', (req, res) => {
    res.render('signup', {
        title: 'Registro',
    });
});

router.get('/usuario', (req, res) => {
    res.render('usuario', {
        title: 'Home usuario'
    });
});

router.get('/admin', (req, res) => {
    res.render('admin', {
        title: 'Home admin'
    });
});


// 404 Page
router.get('*', (req, res) => {
    res.render('error', {
        title: '404 Error'
    });
});

module.exports = router;