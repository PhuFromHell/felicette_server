const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

// Define the Supplier model
module.exports = (sequelize, Sequelize) => {
  const Supplier = sequelize.define("suppliers", {
    // Define attributes for the Supplier model
    supplierName: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING(15),
      allowNull: false,
      defaultValue: "0000000000"
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
  return Supplier; // Return the defined Supplier model
};
