const orderDetailRepository = require('../repositories/order-detail.repository'); // Import repository

class OrderDetailService {
  // Find all orderDetails service method
  async findAllOrderDetails() {
    return await orderDetailRepository.findAllOrderDetail();
  }

  // Find order by ID service method
  async findOrderDetailById(orderId) {
    return await orderDetailRepository.findOrderDetailById(orderId);
  }

  // Save order service method
  async saveOrderDetail(orderData) {
    return await orderDetailRepository.saveOrderDetail(orderData);
  }

  // Delete order by ID service method
  async deleteOrderDetailById(orderId) {
    return await orderDetailRepository.deleteOrderDetailById(orderId);
  }

  // Update order service method
  async updateOrderDetail(orderId, newData) {
    return await orderDetailRepository.updateOrderDetail(orderId, newData);
  }
}

module.exports = new OrderDetailService();
