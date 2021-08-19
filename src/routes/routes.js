const { Router } = require('express');
const indexCtrl = require('../controllers/routes');
const router = Router();


router.get('/', indexCtrl.renderIndex);
router.get('/usuario', indexCtrl.renderUsuario);
router.get('/admin', indexCtrl.renderAdmin);

module.exports = router;