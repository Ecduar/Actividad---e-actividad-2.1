const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cooperative = sequelize.define("Cooperative", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "cooperatives",
  timestamps: true
});

module.exports = Cooperative;
