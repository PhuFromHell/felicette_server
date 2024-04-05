const db = require("../models");
const Customer = db.Customer;

class CustomerRepository {
  // Find all customers in the database
  async findAllCustomers() {
    try {
      const customers = await Customer.findAll();
      return customers;
    } catch (error) {
      throw new Error(`Error while fetching customers: ${error.message}`);
    }
  }

  // Find an customer by its ID
  async findCustomerById(customerId) {
    try {
      const customer = await Customer.findByPk(customerId);
      return customer;
    } catch (error) {
      throw new Error(`Error while fetching customers: ${error.message}`);
    }
  }

  // Save a new customer to the database
  async saveCustomer(customerData) {
    try {
      const customer = await Customer.create(customerData);
      return customer;
    } catch (error) {
      throw new Error(`Error while saving customer: ${error.message}`);
    }
  }

  // Delete an customer by its ID
  async deleteCustomerById(customerId) {
    try {
      await Customer.destroy({ where: { id: customerId } });
      return true; // Deletion successful
    } catch (error) {
      throw new Error(`Error while deleting customer: ${error.message}`);
    }
  }

  // Update an customer by its ID with new data
  async updateCustomer(customerId, newData) {
    try {
      const customer = await Customer.findByPk(customerId);
      if (!customer) {
        return null; // Return null if customer does not exist
      }
      await customer.update(newData);
      return customer;
    } catch (error) {
      throw new Error(`Error while updating customer: ${error.message}`);
    }
  }
}

module.exports = new CustomerRepository();
