const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Helper functions
const findUserByUsername = async (username) => {
  return await User.findOne({ where: { username } });
};

const createUser = async (username, password) => {
  return await User.create({ username, password });
};

module.exports = {
  User,
  findUserByUsername,
  createUser
};