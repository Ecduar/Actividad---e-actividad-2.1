const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const SavingAccount = sequelize.define("SavingAccount", {
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  interestRate: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

SavingAccount.belongsTo(User);
User.hasMany(SavingAccount);

module.exports = SavingAccount;
