const {
  User,
  SavingAccount,
  LoanAccount,
  Cooperative,
  UserCooperative
} = require("../models");

// Listar todos los usuarios
exports.listUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.render("users/index", { users });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para crear un nuevo usuario
exports.newUserForm = (req, res) => {
  res.render("users/form", { user: null });
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.redirect("/users");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para editar un usuario existente
exports.editUserForm = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.render("users/form", { user });
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Actualizar un usuario existente
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.redirect("/users");
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.redirect("/users");
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Listar todas las cuentas de un usuario específico
exports.listUserAccounts = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        SavingAccount,
        LoanAccount,
        { model: Cooperative, through: UserCooperative }
      ]
    });
    if (user) {
      res.render("users/accounts", { user });
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
