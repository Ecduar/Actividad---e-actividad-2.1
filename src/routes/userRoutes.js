const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /users: Muestra una lista de todos los usuarios.
// GET /users/new: Muestra el formulario para crear un nuevo usuario.
// POST /users: Crea un nuevo usuario.
// GET /users/:id/edit: Muestra el formulario para editar un usuario existente.
// PUT /users/:id: Actualiza un usuario existente.
// DELETE /users/:id: Elimina un usuario existente.
// ---------------------------------------------------------------


// Listar todos los usuarios
router.get('/', userController.listUsers);

// Mostrar formulario para crear un nuevo usuario
router.get('/new', userController.newUserForm);

// Crear un nuevo usuario
router.post('/', userController.createUser);

// Mostrar formulario para editar un usuario existente
router.get('/:id/edit', userController.editUserForm);

// Actualizar un usuario existente
router.put('/:id', userController.updateUser);

// Eliminar un usuario
router.delete('/:id', userController.deleteUser);

// Listar todas las cuentas de un usuario específico
router.get('/:id/accounts', userController.listUserAccounts);

module.exports = router;
