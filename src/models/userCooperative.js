// models/userCooperative.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserCooperative = sequelize.define('UserCooperative', {
  role: {
    type: DataTypes.STRING,
    defaultValue: 'member' 
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'user_cooperatives',
  timestamps: true // Esto habilita automáticamente createdAt y updatedAt
});

module.exports = UserCooperative;
