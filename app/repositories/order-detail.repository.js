const db = require("../models");
const OrderDetail = db.OrderDetail;

class OrderDetailRepository {
  // Find all orderDetails in the database
  async findAllOrderDetail() {
    try {
      const orderDetails = await OrderDetail.findAll();
      return orderDetails;
    } catch (error) {
      throw new Error(`Error while fetching orderDetails: ${error.message}`);
    }
  }

  // Find an orderDetail by its ID
  async findOrderDetailById(orderId) {
    try {
      const orderDetail = await OrderDetail.findByPk(orderId);
      return orderDetail;
    } catch (error) {
      throw new Error(`Error while fetching orderDetails: ${error.message}`);
    }
  }

  // Save a new orderDetail to the database
  async saveOrderDetail(orderData) {
    try {
      const orderDetail = await OrderDetail.create(orderData);
      return orderDetail;
    } catch (error) {
      throw new Error(`Error while saving order: ${error.message}`);
    }
  }

  // Delete an orderDetail by its ID
  async deleteOrderDetailById(orderId) {
    try {
      await OrderDetail.destroy({ where: { id: orderId } });
      return true; // Deletion successful
    } catch (error) {
      throw new Error(`Error while deleting order: ${error.message}`);
    }
  }

  // Update an order by its ID with new data
  async updateOrderDetail(orderId, newData) {
    try {
      const orderDetail = await OrderDetail.findByPk(orderId);
      if (!orderDetail) {
        return null; // Return null if orderDetail does not exist
      }
      await orderDetail.update(newData);
      return orderDetail;
    } catch (error) {
      throw new Error(`Error while updating orderDetail: ${error.message}`);
    }
  }
}

module.exports = new OrderDetailRepository();
