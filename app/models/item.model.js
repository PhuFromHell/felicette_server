const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("m_items", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    supplier_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    quanlity: {
      type: Sequelize.STRING,
      allowNull: true
    },
    branch: {
      type: Sequelize.STRING,
      allowNull: true
    },
    color: {
      type: Sequelize.STRING,
      allowNull: true
    },
    origin: {
      type: Sequelize.STRING,
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    fabric: {
      type: Sequelize.STRING,
      allowNull: true
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    image_1: {
      type: Sequelize.STRING,
      allowNull: true
    },
    image_2: {
      type: Sequelize.STRING,
      allowNull: true
    },
    image_3: {
      type: Sequelize.STRING,
      allowNull: true
    },
    image_4: {
      type: Sequelize.STRING,
      allowNull: true
    },
    image_5: {
      type: Sequelize.STRING,
      allowNull: true
    },
    del_flg: {
      type: Sequelize.STRING,
      allowNull: true
    },
    create_by: {
      type: Sequelize.STRING,
      allowNull: true
    },
    edit_by: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
  return Item;
};
