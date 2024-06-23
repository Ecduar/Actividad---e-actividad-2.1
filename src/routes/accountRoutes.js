const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");

// Este archivo define las rutas para manejar las operaciones CRUD de las cuentas
// para manejar las cuentas (tanto de ahorro como de préstamos).

// Listar todas las cuentas de ahorro
router.get("/savings", accountController.listSavingAccounts);

// Mostrar formulario para crear una nueva cuenta de ahorro
router.get("/savings/new", accountController.newSavingAccountForm);

// Crear una nueva cuenta de ahorro
router.post("/savings", accountController.createSavingAccount);

// Mostrar formulario para editar una cuenta de ahorro existente
router.get("/savings/:id/edit", accountController.editSavingAccountForm);

// Actualizar una cuenta de ahorro existente
router.put("/savings/:id", accountController.updateSavingAccount);

// Eliminar una cuenta de ahorro
router.delete("/savings/:id", accountController.deleteSavingAccount);

// Listar todas las cuentas de préstamos
router.get("/loans", accountController.listLoanAccounts);

// Mostrar formulario para crear una nueva cuenta de préstamo
router.get("/loans/new", accountController.newLoanAccountForm);

// Crear una nueva cuenta de préstamo
router.post("/loans", accountController.createLoanAccount);

// Mostrar formulario para editar una cuenta de préstamo existente
router.get("/loans/:id/edit", accountController.editLoanAccountForm);

// Actualizar una cuenta de préstamo existente
router.put("/loans/:id", accountController.updateLoanAccount);

// Eliminar una cuenta de préstamo
router.delete("/loans/:id", accountController.deleteLoanAccount);

// Mostrar la próxima fecha de pago de una cuenta de préstamo
router.get("/loans/:id/next-payment", accountController.nextLoanPaymentDate);

module.exports = router;
