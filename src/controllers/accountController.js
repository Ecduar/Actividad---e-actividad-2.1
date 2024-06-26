const { SavingAccount, LoanAccount, User } = require("../models");

// Listar todas las cuentas de ahorro
exports.listSavingAccounts = async (req, res) => {
  try {
    const accounts = await SavingAccount.findAll({ include: User });
    res.json({ accounts });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para crear una nueva cuenta de ahorro
exports.newSavingAccountForm = (req, res) => {
  res.render("accounts/form", { account: null });
};

// Crear una nueva cuenta de ahorro
exports.createSavingAccount = async (req, res) => {
  try {
    await SavingAccount.create(req.body);
    res.json({ msg: "Cuenta registrada exitosamente" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para editar una cuenta de ahorro existente
exports.editSavingAccountForm = async (req, res) => {
  try {
    const account = await SavingAccount.findByPk(req.params.id);
    if (account) {
      res.json({ msg: "Cuenta actualizada exitosamente" });
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
      res.json({ msg: "Cuenta actualizada exitosamente" });
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
      res.json({ msg: "Cuenta eliminada exitosamente" });
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
    const loanAccounts = await LoanAccount.findAll({ include: User });
    res.json({ loanAccounts });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para crear una nueva cuenta de préstamo
exports.newLoanAccountForm = (req, res) => {
  res.render("accounts/loanForm", { account: null });
};

// Crear una nueva cuenta de préstamo
exports.createLoanAccount = async (req, res) => {
  try {
    await LoanAccount.create(req.body);
    res.json({ msg: "Registro exitoso" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para editar una cuenta de préstamo existente
exports.editLoanAccountForm = async (req, res) => {
  try {
    const account = await LoanAccount.findByPk(req.params.id);
    if (account) {
      res.json({ msg: "Proceso exitoso" });
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
      res.json({ msg: "Proceso exitoso" });
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
      res.json({ msg: "Proceso exitoso" });
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
      res.json({ siguiente_pago: account });
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
