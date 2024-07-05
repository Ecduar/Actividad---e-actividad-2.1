const { User, SavingAccount, LoanAccount, Cooperative, UserCooperative } = require("../models");

// Obtener todos los usuarios
exports.getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
};

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

// Obtener todas las cuentas de un usuario con sus balances y tasas de interés
exports.listUserAccounts = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        { model: SavingAccount },
        { model: LoanAccount }
      ]
    });

    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    const userAccounts = [
      ...user.SavingAccounts.map(account => ({ ...account.get(), type: 'savings', User: user })),
      ...user.LoanAccounts.map(account => ({ ...account.get(), type: 'loans', User: user }))
    ];

    const summary = calculateSummary(userAccounts);

    res.render("users/accounts", { user, userAccounts, summary });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Función para calcular el resumen
const calculateSummary = (accounts) => {
  let savingsCapital = 0, loansCapital = 0, cooperativeCapital = 0;
  let savingsInterestTotal = 0, loansInterestTotal = 0;
  let savingsCount = 0, loansCount = 0;

  accounts.forEach(account => {
    if (account.type === 'savings') {
      savingsCapital += parseFloat(account.balance);
      savingsInterestTotal += parseFloat(account.interestRate);
      savingsCount++;
    } else if (account.type === 'loans') {
      loansCapital += parseFloat(account.balance);
      loansInterestTotal += parseFloat(account.interestRate);
      loansCount++;
    }
  });

  return {
    savingsCapital,
    loansCapital,
    cooperativeCapital, 
    avgSavingsInterestRate: savingsCount ? (savingsInterestTotal / savingsCount).toFixed(2) : 0,
    avgLoansInterestRate: loansCount ? (loansInterestTotal / loansCount).toFixed(2) : 0
  };
};
