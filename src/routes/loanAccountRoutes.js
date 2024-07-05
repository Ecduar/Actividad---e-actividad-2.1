const express = require('express');
const router = express.Router();
const loanAccountController = require('../controllers/loanAccountController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/loans', authenticateToken, authorizeRoles('admin', 'editor', 'viewer'), loanAccountController.listLoanAccounts);
router.get('/loans/new', authenticateToken, authorizeRoles('admin', 'editor'), loanAccountController.newLoanAccountForm);
router.post('/loans', authenticateToken, authorizeRoles('admin', 'editor'), loanAccountController.createLoanAccount);
router.get('/loans/:id/edit', authenticateToken, authorizeRoles('admin', 'editor'), loanAccountController.editLoanAccountForm);
router.put('/loans/:id', authenticateToken, authorizeRoles('admin', 'editor'), loanAccountController.updateLoanAccount);
router.delete('/loans/:id', authenticateToken, authorizeRoles('admin'), loanAccountController.deleteLoanAccount);

module.exports = router;
