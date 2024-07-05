const express = require('express');
const router = express.Router();
const savingAccountController = require('../controllers/savingAccountController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/savings', authenticateToken, authorizeRoles('admin', 'editor', 'viewer'), savingAccountController.listSavingAccounts);
router.get('/savings/new', authenticateToken, authorizeRoles('admin', 'editor'), savingAccountController.newSavingAccountForm);
router.post('/savings', authenticateToken, authorizeRoles('admin', 'editor'), savingAccountController.createSavingAccount);
router.get('/savings/:id/edit', authenticateToken, authorizeRoles('admin', 'editor'), savingAccountController.editSavingAccountForm);
router.put('/savings/:id', authenticateToken, authorizeRoles('admin', 'editor'), savingAccountController.updateSavingAccount);
router.delete('/savings/:id', authenticateToken, authorizeRoles('admin'), savingAccountController.deleteSavingAccount);

module.exports = router;
