const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("items", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Item;
};
