const userController = require("./userController");
const accountController = require("./accountController");
const cooperativesController = require("./cooperativesController");

// Página principal
exports.homePage = (req, res) => {
  res.render("index");
};

// Rutas para usuarios
exports.listUsers = userController.listUsers;
exports.newUserForm = userController.newUserForm;
exports.editUserForm = userController.editUserForm;
exports.listUserAccounts = userController.listUserAccounts;

// Rutas para cuentas de ahorro
exports.listSavingAccounts = accountController.listSavingAccounts;
exports.newSavingAccountForm = accountController.newSavingAccountForm;
exports.editSavingAccountForm = accountController.editSavingAccountForm;

// Rutas para cuentas de préstamos
exports.listLoanAccounts = accountController.listLoanAccounts;
exports.newLoanAccountForm = accountController.newLoanAccountForm;
exports.editLoanAccountForm = accountController.editLoanAccountForm;
exports.nextLoanPaymentDate = accountController.nextLoanPaymentDate;

// Rutas para cooperativas
exports.listCooperatives = cooperativesController.listCooperatives;
exports.newCooperativeForm = cooperativesController.newCooperativeForm;
exports.editCooperativeForm = cooperativesController.editCooperativeForm;
