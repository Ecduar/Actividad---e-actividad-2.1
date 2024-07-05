const express = require("express");
const router = express.Router();
const uiController = require("../controllers/uiController");

// Ruta principal - http://localhost:3000/
router.get("/", uiController.homePage);

// Rutas para usuarios
router.get("/users", uiController.listUsers);
router.get("/users/new", uiController.newUserForm);
router.get("/users/:id/edit", uiController.editUserForm);
router.get("/users/:id/accounts", uiController.listUserAccounts);

// Rutas para cooperativas
router.get("/cooperatives", uiController.listCooperatives);
router.get("/cooperatives/new", uiController.newCooperativeForm);
router.get("/cooperatives/:id/edit", uiController.editCooperativeForm);

// Rutas para cuentas
router.get("/accounts", uiController.listAllAccounts);
router.get("/accounts/savings/new", uiController.newSavingAccountForm);
router.post("/accounts/savings", uiController.createSavingAccount);
router.get("/accounts/savings/:id/edit", uiController.editSavingAccountForm);
router.put("/accounts/savings/:id", uiController.updateSavingAccount);
router.delete("/accounts/savings/:id", uiController.deleteSavingAccount);

router.get("/accounts/loans/new", uiController.newLoanAccountForm);
router.post("/accounts/loans", uiController.createLoanAccount);
router.get("/accounts/loans/:id/edit", uiController.editLoanAccountForm);
router.put("/accounts/loans/:id", uiController.updateLoanAccount);
router.delete("/accounts/loans/:id", uiController.deleteLoanAccount);

module.exports = router;
