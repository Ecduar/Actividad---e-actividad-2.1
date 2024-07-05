const userController = require("./userController");
const cooperativesController = require("./cooperativesController");
const accountController = require("./accountController");

// Página principal
exports.homePage = async (req, res) => {
  try {
    const users = await userController.getAllUsers();
    const cooperatives = await cooperativesController.getAllCooperatives();
    const savingAccounts = await accountController.getAllSavingAccounts();
    const loanAccounts = await accountController.getAllLoanAccounts();

    // Calcular resúmenes
    const savingsCapital = savingAccounts.reduce((acc, account) => acc + parseFloat(account.balance), 0);
    const loansCapital = loanAccounts.reduce((acc, account) => acc + parseFloat(account.balance), 0);
    const avgSavingsInterestRate = (savingAccounts.reduce((acc, account) => acc + parseFloat(account.interestRate), 0) / savingAccounts.length).toFixed(2);
    const avgLoansInterestRate = (loanAccounts.reduce((acc, account) => acc + parseFloat(account.interestRate), 0) / loanAccounts.length).toFixed(2);

    const summary = {
      savingsCapital,
      loansCapital,
      cooperativeCapital: 0, 
      avgSavingsInterestRate: isNaN(avgSavingsInterestRate) ? 0 : avgSavingsInterestRate,
      avgLoansInterestRate: isNaN(avgLoansInterestRate) ? 0 : avgLoansInterestRate,
    };

    // Combinar cuentas de ahorro y préstamos en una sola lista
    const accounts = [
      ...savingAccounts.map(account => ({ ...account.get(), type: 'savings' })),
      ...loanAccounts.map(account => ({ ...account.get(), type: 'loans' }))
    ];

    res.render("index", { users, cooperatives, accounts, summary, userAccounts: accounts });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


// Rutas para usuarios
exports.listUsers = userController.listUsers;
exports.newUserForm = userController.newUserForm;
exports.editUserForm = userController.editUserForm;
exports.listUserAccounts = userController.listUserAccounts;

// Rutas para cooperativas
exports.listCooperatives = cooperativesController.listCooperatives;
exports.newCooperativeForm = cooperativesController.newCooperativeForm;
exports.editCooperativeForm = cooperativesController.editCooperativeForm;
exports.showCooperative = cooperativesController.showCooperative;

// Rutas para cuentas
exports.listAllAccounts = accountController.listAllAccounts;
exports.newSavingAccountForm = accountController.newSavingAccountForm;
exports.createSavingAccount = accountController.createSavingAccount;
exports.editSavingAccountForm = accountController.editSavingAccountForm;
exports.updateSavingAccount = accountController.updateSavingAccount;
exports.deleteSavingAccount = accountController.deleteSavingAccount;
exports.newLoanAccountForm = accountController.newLoanAccountForm;
exports.createLoanAccount = accountController.createLoanAccount;
exports.editLoanAccountForm = accountController.editLoanAccountForm;
exports.updateLoanAccount = accountController.updateLoanAccount;
exports.deleteLoanAccount = accountController.deleteLoanAccount;
exports.nextLoanPaymentDate = accountController.nextLoanPaymentDate;
