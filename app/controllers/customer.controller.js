const customerService = require('../services/customer.service'); // Import service

class CustomerController {
  // Find all customers controller
  async findAllCustomers(req, res) {
    try {
      const customers = await customerService.findAllCustomers();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Find customer by ID controller
  async findCustomerById(req, res) {
    const customerId = req.params.id;
    try {
      const customer = await customerService.findCustomerById(customerId);
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      res.json(customer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Save customer controller
  async saveCustomer(req, res) {
    const customerData = req.body;
    try {
      const newCustomer = await customerService.saveCustomer(customerData);
      res.status(201).json(newCustomer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete customer by ID controller
  async deleteCustomerById(req, res) {
    const customerId = req.params.id;
    try {
      const result = await customerService.deleteCustomerById(customerId);
      if (!result) {
        return res.status(404).json({ message: "Customer not found" });
      }
      res.json({ message: "Customer deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update customer by ID controller
  async updateCustomer(req, res) {
    const customerId = req.body.id;
    const newData = req.body;
    try {
      const updatedCustomer = await customerService.updateCustomer(customerId, newData);
      if (!updatedCustomer) {
        return res.status(404).json({ message: "Customer not found" });
      }
      res.json(updatedCustomer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new CustomerController();
