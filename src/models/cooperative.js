const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cooperative = sequelize.define("Cooperative", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Cooperative;
