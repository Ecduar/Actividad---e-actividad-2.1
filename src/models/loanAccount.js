const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const LoanAccount = sequelize.define("LoanAccount", {
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  interestRate: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  nextPaymentDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

LoanAccount.belongsTo(User);
User.hasMany(LoanAccount);

module.exports = LoanAccount;
