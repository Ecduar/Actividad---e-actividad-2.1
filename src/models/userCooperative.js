const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");
const Cooperative = require("./cooperative");

const UserCooperative = sequelize.define(
  "UserCooperative",
  {
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { tableName: "usercooperative" }
);

User.belongsToMany(Cooperative, { through: UserCooperative });
Cooperative.belongsToMany(User, { through: UserCooperative });

module.exports = UserCooperative;
