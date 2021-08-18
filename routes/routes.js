const express = require('express');
const router = express.Router();

// routes
router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home'
    });
});

router.get('/login', (req, res) => {
    res.render('users/login', {
        title: 'Login',
    });
});

router.get('/loginadmin', (req, res) => {
    res.render('users/login2', {
        title: 'Login Admin',
    });
});

router.get('/registro', (req, res) => {
    res.render('users/signup', {
        title: 'Registro',
    });
});

router.get('/usuario', (req, res) => {
    res.render('users/usuario', {
        title: 'Home usuario'
    });
});

router.get('/admin', (req, res) => {
    res.render('users/admin', {
        title: 'Home admin'
    });
});

// TODO: Volver activar esta ruta
// 404 Page
// router.get('*', (req, res) => {
//     res.render('error', {
//         title: '404 Error'
//     });
// });

module.exports = router;