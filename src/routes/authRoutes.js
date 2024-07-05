const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Mostrar formulario de registro
router.get('/register', (req, res) => {
  res.render('register');
});

// Registro de usuario
router.post('/register', authController.register);

// Mostrar formulario de login
router.get('/login', (req, res) => {
  res.render('login');
});

// Login de usuario
router.post('/login', authController.login);

// Logout de usuario
router.post('/logout', authController.logout);

module.exports = router;
