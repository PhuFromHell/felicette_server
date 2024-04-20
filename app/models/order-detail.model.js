const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const OrderDetail = sequelize.define("order_details", {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    number: {
      type: Sequelize.STRING(5),
      allowNull: false
    },
    brand: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    size: {
      type: Sequelize.STRING(4),
      allowNull: false
    },
    color: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    currency: {
      type: Sequelize.STRING(3),
      allowNull: true,
      defaultValue: 'VND'
    },
    note: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    delFlg: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    createdBy: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "admin"
    },
    updatedBy: {
      type: Sequelize.STRING,
      allowNull: true
    },
  });
  return OrderDetail;
};
