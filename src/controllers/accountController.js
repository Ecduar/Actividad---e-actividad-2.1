const { SavingAccount, LoanAccount, User } = require("../models");

// Listar todas las cuentas de ahorro
exports.listSavingAccounts = async (req, res) => {
  try {
    const savingAccounts = await SavingAccount.findAll({ include: User });
    res.render("accounts/savings", { savingAccounts });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para crear una nueva cuenta de ahorro
exports.newSavingAccountForm = (req, res) => {
  res.render("accounts/savingForm", { account: null });
};

// Crear una nueva cuenta de ahorro
exports.createSavingAccount = async (req, res) => {
  try {
    await SavingAccount.create(req.body);
    res.redirect("/accounts/savings");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para editar una cuenta de ahorro existente
exports.editSavingAccountForm = async (req, res) => {
  try {
    const account = await SavingAccount.findByPk(req.params.id);
    if (account) {
      res.render("accounts/savingForm", { account });
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
      res.redirect("/accounts/savings");
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
      res.redirect("/accounts/savings");
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
