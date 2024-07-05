const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const userController = require('../controllers/userController');

// Rutas para usuarios
router.get('/', authenticateToken, authorizeRoles('admin', 'editor'), userController.listUsers);
router.get('/new', authenticateToken, authorizeRoles('admin', 'editor'), userController.newUserForm);
router.post('/', authenticateToken, authorizeRoles('admin', 'editor'), userController.createUser);
router.get('/:id/edit', authenticateToken, authorizeRoles('admin', 'editor'), userController.editUserForm);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'editor'), userController.updateUser);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'editor'), userController.deleteUser);
router.get('/:id/accounts', authenticateToken, authorizeRoles('admin', 'editor'), userController.listUserAccounts);

module.exports = router;
