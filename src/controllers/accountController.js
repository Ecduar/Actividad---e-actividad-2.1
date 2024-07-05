const { SavingAccount, LoanAccount, User } = require("../models");

// Obtener todas las cuentas de ahorro
exports.getAllSavingAccounts = async () => {
  try {
    const savingAccounts = await SavingAccount.findAll({ include: [User] });
    return savingAccounts;
  } catch (error) {
    throw error;
  }
};

// Obtener todas las cuentas de préstamos
exports.getAllLoanAccounts = async () => {
  try {
    const loanAccounts = await LoanAccount.findAll({ include: [User] });
    return loanAccounts;
  } catch (error) {
    throw error;
  }
};

// Listar todas las cuentas
exports.listAllAccounts = async (req, res) => {
  try {
    const savingAccounts = await SavingAccount.findAll({ include: User });
    const loanAccounts = await LoanAccount.findAll({ include: User });

    // cuentas de ahorro y préstamos en una sola lista
    const accounts = [...savingAccounts.map(account => ({ ...account.get(), type: 'savings' })), 
                      ...loanAccounts.map(account => ({ ...account.get(), type: 'loans' }))];

    res.render('accounts/list', { accounts });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para crear una nueva cuenta de ahorro
exports.newSavingAccountForm = async (req, res) => {
  try {
    const users = await User.findAll();
    res.render("accounts/form", { account: null, users, type: 'savings' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Crear una nueva cuenta de ahorro
exports.createSavingAccount = async (req, res) => {
  try {
    await SavingAccount.create(req.body);
    res.redirect('/accounts');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para editar una cuenta de ahorro existente
exports.editSavingAccountForm = async (req, res) => {
  try {
    const account = await SavingAccount.findByPk(req.params.id);
    const users = await User.findAll();
    if (account) {
      res.render("accounts/form", { account, users, type: 'savings' });
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Actualizar una cuenta de ahorro existente
exports.updateSavingAccount = async (req, res) => {
  try {
    const account = await SavingAccount.findByPk(req.params.id);
    if (account) {
      await account.update(req.body);
      res.redirect('/accounts');
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Eliminar una cuenta de ahorro
exports.deleteSavingAccount = async (req, res) => {
  try {
    const account = await SavingAccount.findByPk(req.params.id);
    if (account) {
      await account.destroy();
      res.redirect('/accounts');
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Listar todas las cuentas de préstamos
exports.listLoanAccounts = async (req, res) => {
  try {
    const accounts = await LoanAccount.findAll({ include: User });
    res.render('accounts/list', { accounts, type: 'loans' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para crear una nueva cuenta de préstamo
exports.newLoanAccountForm = async (req, res) => {
  try {
    const users = await User.findAll();
    res.render("accounts/form", { account: null, users, type: 'loans' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Crear una nueva cuenta de préstamo
exports.createLoanAccount = async (req, res) => {
  try {
    await LoanAccount.create(req.body);
    res.redirect('/accounts');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para editar una cuenta de préstamo existente
exports.editLoanAccountForm = async (req, res) => {
  try {
    const account = await LoanAccount.findByPk(req.params.id);
    const users = await User.findAll();
    if (account) {
      res.render("accounts/form", { account, users, type: 'loans' });
    } else {
      res.status(404).json({ msg: "Cuenta no encontrada" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Actualizar una cuenta de préstamo existente
exports.updateLoanAccount = async (req, res) => {
  try {
    const account = await LoanAccount.findByPk(req.params.id);
    if (account) {
      await account.update(req.body);
      res.redirect('/accounts');
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Eliminar una cuenta de préstamo
exports.deleteLoanAccount = async (req, res) => {
  try {
    const account = await LoanAccount.findByPk(req.params.id);
    if (account) {
      await account.destroy();
      res.redirect('/accounts');
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar la próxima fecha de pago de una cuenta de préstamo
exports.nextLoanPaymentDate = async (req, res) => {
  try {
    const account = await LoanAccount.findByPk(req.params.id);
    if (account) {
      res.json({ siguiente_pago: account.nextPaymentDate });
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
