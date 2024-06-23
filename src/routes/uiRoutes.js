const express = require("express");
const router = express.Router();
const uiController = require("../controllers/uiController");

// Ruta principal
router.get("/", uiController.homePage);

// Rutas para usuarios
router.get("/users", uiController.listUsers);
router.get("/users/new", uiController.newUserForm);
router.get("/users/:id/edit", uiController.editUserForm);
router.get("/users/:id/accounts", uiController.listUserAccounts);

// Rutas para cuentas de ahorro
router.get("/accounts/savings", uiController.listSavingAccounts);
router.get("/accounts/savings/new", uiController.newSavingAccountForm);
router.get("/accounts/savings/:id/edit", uiController.editSavingAccountForm);

// Rutas para cuentas de préstamos
router.get("/accounts/loans", uiController.listLoanAccounts);
router.get("/accounts/loans/new", uiController.newLoanAccountForm);
router.get("/accounts/loans/:id/edit", uiController.editLoanAccountForm);
router.get(
  "/accounts/loans/:id/next-payment",
  uiController.nextLoanPaymentDate
);

// Rutas para cooperativas
router.get("/cooperatives", uiController.listCooperatives);
router.get("/cooperatives/new", uiController.newCooperativeForm);
router.get("/cooperatives/:id/edit", uiController.editCooperativeForm);

module.exports = router;
