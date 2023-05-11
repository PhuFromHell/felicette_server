const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

class Order extends Model {}
Order.init({
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contract_no: {
    type: DataTypes.STRING,
    allowNull: true
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  delivery_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  order_date: {
    type: DataTypes.STRING,
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quanlity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  branch: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fabric: {
    type: DataTypes.STRING,
    allowNull: false
  },
  order_date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  unit_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },
  note_by_customer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  note_by_employee: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  employee_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tax: {
    type: DataTypes.FLOAT,
    allowNull: false
  },












  
}, {
  sequelize,
  modelName: 'order'
});

module.exports = Order;