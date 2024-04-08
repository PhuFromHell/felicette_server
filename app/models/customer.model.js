const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

// Define the Customer model
module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
    // Define attributes for the Customer model
    name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    mail: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    phone: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    postalCode : {
      type: Sequelize.STRING(8),
      allowNull: true
    },
    country : {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    delFlg : {
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
  return Customer; // Return the defined Customer model
};
