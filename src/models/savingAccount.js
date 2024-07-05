const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SavingAccount = sequelize.define("SavingAccount", {
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00
  },
  interestRate: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0.00
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  }
}, {
  tableName: "saving_accounts",
  timestamps: true
});

module.exports = SavingAccount;
