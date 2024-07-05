const express = require('express');
const router = express.Router();
const cooperativeController = require('../controllers/cooperativesController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/', authenticateToken, authorizeRoles('admin', 'editor', 'viewer'), cooperativeController.listCooperatives);
router.get('/new', authenticateToken, authorizeRoles('admin', 'editor'), cooperativeController.newCooperativeForm);
router.post('/', authenticateToken, authorizeRoles('admin', 'editor'), cooperativeController.createCooperative);
router.get('/:id/edit', authenticateToken, authorizeRoles('admin', 'editor'), cooperativeController.editCooperativeForm);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'editor'), cooperativeController.updateCooperative);
router.delete('/:id', authenticateToken, authorizeRoles('admin'), cooperativeController.deleteCooperative);

// Nueva ruta para gestionar usuarios
router.get('/:id/manage', authenticateToken, authorizeRoles('admin', 'editor'), cooperativeController.manageCooperativeUsers);
router.post('/:cooperativeId/users', authenticateToken, authorizeRoles('admin', 'editor'), cooperativeController.addUserToCooperative);
router.delete('/:cooperativeId/users/:userId', authenticateToken, authorizeRoles('admin', 'editor'), cooperativeController.removeUserFromCooperative);

module.exports = router;
