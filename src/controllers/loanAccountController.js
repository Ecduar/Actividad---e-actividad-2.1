const { LoanAccount, User } = require("../models");

exports.listLoanAccounts = async (req, res) => {
  try {
    const accounts = await LoanAccount.findAll({ include: User });
    res.render('accounts/list', { accounts, type: 'loans' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.newLoanAccountForm = (req, res) => {
  res.render("accounts/form", { account: null, type: 'loans' });
};

exports.createLoanAccount = async (req, res) => {
  try {
    await LoanAccount.create(req.body);
    res.redirect('/accounts/loans');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.editLoanAccountForm = async (req, res) => {
  try {
    const account = await LoanAccount.findByPk(req.params.id);
    if (account) {
      res.render("accounts/form", { account, type: 'loans' });
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateLoanAccount = async (req, res) => {
  try {
    const account = await LoanAccount.findByPk(req.params.id);
    if (account) {
      await account.update(req.body);
      res.redirect('/accounts/loans');
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteLoanAccount = async (req, res) => {
  try {
    const account = await LoanAccount.findByPk(req.params.id);
    if (account) {
      await account.destroy();
      res.redirect('/accounts/loans');
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.nextLoanPaymentDate = async (req, res) => {
  try {
    const account = await LoanAccount.findByPk(req.params.id);
    if (account) {
      res.json({ nextPaymentDate: account.nextPaymentDate });
    } else {
      res.status(404).send("Cuenta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
