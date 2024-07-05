const { SavingAccount, LoanAccount, Cooperative } = require("../models");

// Obtener resumen de cuentas
exports.getAccountsSummary = async (req, res) => {
  try {
    const savingAccounts = await SavingAccount.findAll();
    const loanAccounts = await LoanAccount.findAll();
    const cooperatives = await Cooperative.findAll();

    const savingsCapital = savingAccounts.reduce((total, account) => total + parseFloat(account.balance), 0);
    const loansCapital = loanAccounts.reduce((total, account) => total + parseFloat(account.balance), 0);
    const cooperativeCapital = cooperatives.reduce((total, cooperative) => total + parseFloat(cooperative.balance || 0), 0);

    const avgSavingsInterestRate = (savingAccounts.reduce((total, account) => total + parseFloat(account.interestRate), 0) / savingAccounts.length) || 0;
    const avgLoansInterestRate = (loanAccounts.reduce((total, account) => total + parseFloat(account.interestRate), 0) / loanAccounts.length) || 0;

    const summary = {
      savingsCapital,
      loansCapital,
      cooperativeCapital,
      avgSavingsInterestRate: avgSavingsInterestRate.toFixed(2),
      avgLoansInterestRate: avgLoansInterestRate.toFixed(2)
    };

    res.render('index', { summary });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
