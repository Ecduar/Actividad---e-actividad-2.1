const User = require("./user");
const SavingAccount = require("./savingAccount");
const LoanAccount = require("./loanAccount");
const Cooperative = require("./cooperative");
const UserCooperative = require("./userCooperative");

// Definir relaciones entre los modelos
User.hasMany(SavingAccount, { foreignKey: 'userId' });
SavingAccount.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(LoanAccount, { foreignKey: 'userId' });
LoanAccount.belongsTo(User, { foreignKey: 'userId' });

User.belongsToMany(Cooperative, { through: UserCooperative, foreignKey: 'userId' });
Cooperative.belongsToMany(User, { through: UserCooperative, foreignKey: 'cooperativeId' });

module.exports = {
  User,
  SavingAccount,
  LoanAccount,
  Cooperative,
  UserCooperative
};
