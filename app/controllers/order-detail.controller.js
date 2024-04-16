const orderDetailService = require('../services/order-detail.service'); // Import service

class OrderDetailController {
  // Find all orderDetails controller
  async findAllOrderDetails(req, res) {
    console.log("🚀 ~ OrderDetailController ~ findAllOrderDetails ~ req:", req)
    try {
      const orderDetails = await orderDetailService.findAllOrderDetails();
      res.json(orderDetails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Find orderDetail by ID controller
  async findOrderDetailById(req, res) {
    const orderDetailId = req.params.id;
    try {
      const orderDetail = await orderDetailService.findOrderDetailById(orderDetailId);
      if (!orderDetail) {
        return res.status(404).json({ message: "OrderDetail not found" });
      }
      res.json(orderDetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Save orderDetail controller
  async saveOrderDetail(req, res) {
    const orderDetailData = req.body;
    try {
      const newOrderDetail = await orderDetailService.saveOrderDetail(orderDetailData);
      res.status(201).json(newOrderDetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete orderDetail by ID controller
  async deleteOrderDetailById(req, res) {
    const orderDetailId = req.params.id;
    try {
      const result = await orderDetailService.deleteOrderDetailById(orderDetailId);
      if (!result) {
        return res.status(404).json({ message: "OrderDetail not found" });
      }
      res.json({ message: "OrderDetail deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update orderDetail by ID controller
  async updateOrderDetail(req, res) {
    const newData = req.body;
    try {
      const updatedOrderDetail = await orderDetailService.updateOrderDetail(req.body.id, newData);
      if (!updatedOrderDetail) {
        return res.status(404).json({ message: "OrderDetail not found" });
      }
      res.json(updatedOrderDetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new OrderDetailController();
