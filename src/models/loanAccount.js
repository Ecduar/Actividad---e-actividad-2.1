const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LoanAccount = sequelize.define('LoanAccount', {
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
    allowNull: false
  },
  interestRate: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0.00,
    allowNull: false
  },
  nextPaymentDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'loan_accounts',
  timestamps: true
});

module.exports = LoanAccount;
