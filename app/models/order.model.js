module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    customer_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    contract_no: {
      type: Sequelize.STRING,
      allowNull: true
    },
    birth_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    delivery_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    order_date: {
      type: Sequelize.STRING,
      allowNull: true
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    size: {
      type: Sequelize.STRING,
      allowNull: false
    },
    quanlity: {
      type: Sequelize.STRING,
      allowNull: false
    },
    branch: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fabric: {
      type: Sequelize.STRING,
      allowNull: false
    },
    unit_price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    currency: {
      type: Sequelize.STRING,
      allowNull: false
    },
    note_by_customer: {
      type: Sequelize.STRING,
      allowNull: false
    },
    note_by_employee: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    employee_id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tax: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
  });
  return Order;
};