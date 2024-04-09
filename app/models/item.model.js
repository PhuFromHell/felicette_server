const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

// Define the Item model
module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("items", {
    // Define attributes for the Item model
    itemName: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    supplier: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    quality: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    branch: {
      type: Sequelize.STRING(10),
      allowNull: true
    },
    color: {
      type: Sequelize.STRING(7),
      allowNull: true
    },
    origin: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    currency: {
      type: Sequelize.STRING(5),
      allowNull: true,
      defaultValue: 'VND'
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    fabric: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    delFlg: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    createdBy: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    updatedBy: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
  });
  return Item; // Return the defined Item model
};
