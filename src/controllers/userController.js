const { User, SavingAccount, LoanAccount, Cooperative, UserCooperative } = require('../models');

// Listar todos los usuarios
exports.listUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.render('users/index', { users });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para crear un nuevo usuario
exports.newUserForm = (req, res) => {
  res.render('users/form', { user: null });
};

