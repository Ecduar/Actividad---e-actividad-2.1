const { SavingAccount, User } = require("../models");

exports.listSavingAccounts = async (req, res) => {
  try {
    const accounts = await SavingAccount.findAll({ include: User });
    res.render('accounts/list', { accounts, type: 'savings' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.newSavingAccountForm = (req, res) => {
  res.render("accounts/form", { account: null, type: 'savings' });
};

exports.createSavingAccount = async (req, res) => {
  try {
    await SavingAccount.create(req.body);
    res.redirect('/accounts/savings');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.editSavingAccountForm = async (req, res) => {
  try {
    const account = await SavingAccount.findByPk(req.params.id);
    if (account) {
      res.render("accounts/form", { account, type: 'savings' });
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSavingAccount = async (req, res) => {
  try {
    const account = await SavingAccount.findByPk(req.params.id);
    if (account) {
      await account.update(req.body);
      res.redirect('/accounts/savings');
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSavingAccount = async (req, res) => {
  try {
    const account = await SavingAccount.findByPk(req.params.id);
    if (account) {
      await account.destroy();
      res.redirect('/accounts/savings');
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
