const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("items", {
    itemName: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    supplierName: {
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
  return Item;
};
