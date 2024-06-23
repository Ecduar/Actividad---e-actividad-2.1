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

module.exports = router;
