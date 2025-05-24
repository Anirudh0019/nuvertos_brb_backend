const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Compound = sequelize.define('Compound', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'compounds',
  timestamps: false,
});

module.exports = Compound;
