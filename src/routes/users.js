const { Router } = require('express');
const router = Router();

const userRouter = require('../controllers/user');

// signin
router.get('/login', userRouter.renderLogin);
router.post('/login', userRouter.login);

router.get('/loginadmin', userRouter.renderLoginAdmin);
router.post('/loginadmin', userRouter.loginAdmin);

// signup
router.get('/registro', userRouter.renderRegistro);
router.post('/registro', userRouter.registro);

// logout
router.get('/registro', userRouter.logout);

module.exports = router;