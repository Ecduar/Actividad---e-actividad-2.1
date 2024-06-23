const express = require("express");
const router = express.Router();
const cooperativesController = require("../controllers/cooperativesController");

// Listar todas las cooperativas
router.get("/", cooperativesController.listCooperatives);

// Mostrar formulario para crear una nueva cooperativa
router.get("/new", cooperativesController.newCooperativeForm);

// Crear una nueva cooperativa
router.post("/", cooperativesController.createCooperative);

// Mostrar formulario para editar una cooperativa existente
router.get("/:id/edit", cooperativesController.editCooperativeForm);

// Actualizar una cooperativa existente
router.put("/:id", cooperativesController.updateCooperative);

// Eliminar una cooperativa
router.delete("/:id", cooperativesController.deleteCooperative);

// Agregar un usuario a una cooperativa
router.post(
  "/:cooperativeId/users/:userId",
  cooperativesController.addUserToCooperative
);

// Eliminar un usuario de una cooperativa
router.delete(
  "/:cooperativeId/users/:userId",
  cooperativesController.removeUserFromCooperative
);

module.exports = router;
