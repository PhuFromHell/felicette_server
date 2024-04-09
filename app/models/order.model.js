const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    customerName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    deliveryDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    orderDate: {
      type: Sequelize.STRING,
      allowNull: true
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    brand: {
      type: Sequelize.STRING,
      allowNull: false
    },
    unitPrice: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    currency: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: 'VND'
    },
    noteByCustomer: {
      type: Sequelize.STRING,
      allowNull: false
    },
    note: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    orderBy: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tax: {
      type: Sequelize.FLOAT,
      allowNull: false
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
  return Order;
};
