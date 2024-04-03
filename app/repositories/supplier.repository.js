const { throws } = require("assert");
const db = require("../models");
const Supplier = db.Supplier;

class SupplierRepository {
    async findAllSupplier() {
      try {
        const suppliers = await Supplier.findAll();
        return suppliers;
      } catch (error) {
        throw new error(`Error while fetching suppliers: ${error.message}`)
      }
    }

    
  // Find an supplier by its ID
  async findSupplierById(supplierId) {
    try {
      const supplier = await Supplier.findByPk(supplierId);
      return supplier;
    } catch (error) {
      throw new Error(`Error while fetching suppliers: ${error.message}`);
    }
  }

  // Save a new supplier to the database
  async saveSupplier(supplierData) {
    try {
      const supplier = await Supplier.create(supplierData);
      return supplier;
    } catch (error) {
      throw new Error(`Error while saving supplier: ${error.message}`);
    }
  }

  // Delete an supplier by its ID
  async deleteSupplierById(supplierId) {
    try {
      await Supplier.destroy({ where: { id: supplierId } });
      return true; // Deletion successful
    } catch (error) {
      throw new Error(`Error while deleting supplier: ${error.message}`);
    }
  }

  // Update an supplier by its ID with new data
  async updateSupplier(supplierId, newData) {
    try {
      const supplier = await Supplier.findByPk(supplierId);
      if (!supplier) {
        return null; // Return null if supplier does not exist
      }
      await supplier.update(newData);
      return supplier;
    } catch (error) {
      throw new Error(`Error while updating supplier: ${error.message}`);
    }
  }
}
module.exports = new SupplierRepository();