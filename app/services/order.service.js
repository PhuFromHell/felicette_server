const orderRepository = require('../repositories/order.repository'); // Import repository

class OrderService {
  // Find all orders service method
  async findAllOrders() {
    return await orderRepository.findAllOrders();
  }

  // Find order by ID service method
  async findOrderById(orderId) {
    return await orderRepository.findOrderById(orderId);
  }

  // Save order service method
  async saveOrder(orderData) {
    return await orderRepository.saveOrder(orderData);
  }

  // Delete order by ID service method
  async deleteOrderById(orderId) {
    return await orderRepository.deleteOrderById(orderId);
  }

  // Update order service method
  async updateOrder(orderId, newData) {
    return await orderRepository.updateOrder(orderId, newData);
  }

  // Function to fetch orders with conditions
  async fetchOrdersWithConditions(conditions) {
    try {
      const orders = await orderRepository.fetchOrdersWithConditions(conditions);
      return orders;
    } catch (error) {
      throw new Error('Error while fetching orders with conditions: ' + error.message);
    }
  }
}

module.exports = new OrderService();
