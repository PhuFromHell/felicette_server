const db = require("../models");
const Order = db.Order;

class OrderRepository {
  // Find all orders in the database
  async findAllOrders() {
    try {
      const orders = await Order.findAll();
      return orders;
    } catch (error) {
      throw new Error(`Error while fetching orders: ${error.message}`);
    }
  }

  // Find an order by its ID
  async findOrderById(orderId) {
    try {
      const order = await Order.findByPk(orderId);
      return order;
    } catch (error) {
      throw new Error(`Error while fetching orders: ${error.message}`);
    }
  }

  // Save a new order to the database
  async saveOrder(orderData) {
    try {
      const order = await Order.create(orderData);
      return order;
    } catch (error) {
      throw new Error(`Error while saving order: ${error.message}`);
    }
  }

  // Delete an order by its ID
  async deleteOrderById(orderId) {
    try {
      await Order.destroy({ where: { id: orderId } });
      return true; // Deletion successful
    } catch (error) {
      throw new Error(`Error while deleting order: ${error.message}`);
    }
  }

  // Update an order by its ID with new data
  async updateOrder(orderId, newData) {
    try {
      const order = await Order.findByPk(orderId);
      if (!order) {
        return null; // Return null if order does not exist
      }
      await order.update(newData);
      return order;
    } catch (error) {
      throw new Error(`Error while updating order: ${error.message}`);
    }
  }
}

module.exports = new OrderRepository();
