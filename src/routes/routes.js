const express = require('express');
const router = express.Router();

// routes
router.get('/', (req, res) => {
    res.render('index', {title: 'First Website'});
});

router.get('/contact', (req, res) => {
    res.render('contact', {title: 'First Website'});
});

module.exports = router; 
