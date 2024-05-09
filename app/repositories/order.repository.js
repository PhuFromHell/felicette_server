const db = require("../models");
const Order = db.Order;
const { Op } = require('sequelize');

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
  // Function to fetch orders with conditions
  async fetchOrdersWithConditions(conditions) {
    try {
      let whereClause = {}; // Initialize an empty condition object

      // Add condition for name if provided
      if (conditions.name) {
        whereClause.name = {
          [Op.like]: `%${conditions.name}%`
        };
      }

      // Add condition for phone if provided
      if (conditions.phone) {
        whereClause.phone = {
          [Op.like]: `%${conditions.phone}%`
        };
      }

      // Add condition for address if provided
      if (conditions.address) {
        whereClause.address = {
          [Op.like]: `%${conditions.address}%`
        };
      }

      // Determine condition for deliveryDate if provided
      if (conditions.deliveryDateFrom && conditions.deliveryDateTo) {
        whereClause.deliveryDate = {
          [Op.between]: [conditions.deliveryDateFrom, conditions.deliveryDateTo]
        };
      } else if (conditions.deliveryDateFrom) {
        whereClause.deliveryDate = {
          [Op.gte]: conditions.deliveryDateFrom
        };
      } else if (conditions.deliveryDateTo) {
        whereClause.deliveryDate = {
          [Op.lte]: conditions.deliveryDateTo
        };
      }

      // Add condition for brand if provided
      if (conditions.brand) {
        whereClause.brand = {
          [Op.like]: `%${conditions.brand}%`
        };
      }

      // Add condition for status if provided
      if (conditions.status) {
        whereClause.status = {
          [Op.like]: `%${conditions.status}%`
        };
      }

      // Add condition for orderBy if provided
      if (conditions.orderBy) {
        whereClause.orderBy = {
          [Op.like]: `%${conditions.orderBy}%`
        };
      }

      // Add condition for delFlg if provided
      if (conditions.delFlg) {
        whereClause.delFlg = conditions.delFlg;
      }

      // Call findAll with conditions if any
      const orders = await Order.findAll({ where: whereClause });
      
      return orders;
    } catch (error) {
      throw new Error('Error while fetching orders with conditions: ' + error.message);
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
