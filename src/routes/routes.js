const { Router } = require('express');
const indexCtrl = require('../controllers/routes');
const router = Router();

// auth user
const auth = require('../helpers/auth');


router.get('/', indexCtrl.renderIndex);
router.get('/usuario', auth.isAuthenticated, indexCtrl.renderUsuario);
router.get('/admin', indexCtrl.renderAdmin);

module.exports = router;