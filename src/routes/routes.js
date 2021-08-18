const { Router } = require('express');
const indexCtrl = require('../controllers/routes');
const router = Router();


router.get('/', indexCtrl.renderIndex);
router.get('/login', indexCtrl.renderLogin);
router.get('/loginadmin', indexCtrl.renderLoginAdmin);
router.get('/registro', indexCtrl.renderRegistro);
router.get('/usuario', indexCtrl.renderUsuario);
router.get('/admin', indexCtrl.renderAdmin);
// TODO: solucionar el error de compatibilidad en error
// router.get('/*', indexCtrl.renderError);

module.exports = router;