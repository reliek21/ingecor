const express = require('express');
const router = express.Router();

// routes
router.get('/', (req, res) => {
    res.render('login', {
        title: 'Login'
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
    res.render('home', {
        title: 'Home'
    });
});

router.get('/admin', (req, res) => {
    res.render('home2', {
        title: 'Home Admin'
    });
});


// 404 Page
router.get('*', (req, res) => {
    res.render('error', {
        title: '404 Error'
    });
});

module.exports = router;