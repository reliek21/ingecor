const { Router } = require('express');
const indexCtrl = require('../controllers/routes');
const router = Router();


router.get('/', indexCtrl.renderIndex);

module.exports = router;