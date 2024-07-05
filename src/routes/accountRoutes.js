const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");

router.get("/", accountController.listAllAccounts);
router.get("/savings/new", accountController.newSavingAccountForm);
router.post("/savings", accountController.createSavingAccount);
router.get("/savings/:id/edit", accountController.editSavingAccountForm);
router.put("/savings/:id", accountController.updateSavingAccount);
router.delete("/savings/:id", accountController.deleteSavingAccount);

router.get("/loans/new", accountController.newLoanAccountForm);
router.post("/loans", accountController.createLoanAccount);
router.get("/loans/:id/edit", accountController.editLoanAccountForm);
router.put("/loans/:id", accountController.updateLoanAccount);
router.delete("/loans/:id", accountController.deleteLoanAccount);

module.exports = router;
