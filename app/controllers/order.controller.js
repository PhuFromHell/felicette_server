const orderService = require('../services/order.service'); // Import service

class OrderController {
  // Find all orders controller
  async findAllOrders(req, res) {
    try {
      const orders = await orderService.findAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Find order by ID controller
  async findOrderById(req, res) {
    const orderId = req.params.id;
    try {
      const order = await orderService.findOrderById(orderId);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Save order controller
  async saveOrder(req, res) {
    const orderData = req.body;
    try {
      const newOrder = await orderService.saveOrder(orderData);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete order by ID controller
  async deleteOrderById(req, res) {
    const orderId = req.params.id;
    try {
      const result = await orderService.deleteOrderById(orderId);
      if (!result) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.json({ message: "Order deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update order by ID controller
  async updateOrder(req, res) {
    const newData = req.body;
    try {
      const updatedOrder = await orderService.updateOrder(req.body.id, newData);
      if (!updatedOrder) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.json(updatedOrder);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new OrderController();
