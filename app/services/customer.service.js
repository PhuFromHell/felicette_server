const customerRepository = require('../repositories/customer.repository'); // Import repository

class CustomerService {
  // Find all customers service method
  async findAllCustomers() {
    return await customerRepository.findAllCustomers();
  }

  // Find customer by ID service method
  async findCustomerById(customerId) {
    return await customerRepository.findCustomerById(customerId);
  }

  // Save customer service method
  async saveCustomer(customerData) {
    return await customerRepository.saveCustomer(customerData);
  }

  // Delete customer by ID service method
  async deleteCustomerById(customerId) {
    return await customerRepository.deleteCustomerById(customerId);
  }

  // Update customer service method
  async updateCustomer(customerId, newData) {
    return await customerRepository.updateCustomer(customerId, newData);
  }
}

module.exports = new CustomerService();
