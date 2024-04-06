const supplierRepository = require('../repositories/supplier.repository'); // Import repository

class SupplierService {
  // Find all suppliers service method
  async findAllSuppliers() {
    return await supplierRepository.findAllSuppliers();
  }

  // Find supplier by ID service method
  async findSupplierById(supplierId) {
    return await supplierRepository.findSupplierById(supplierId);
  }

  // Save supplier service method
  async saveSupplier(supplierData) {
    return await supplierRepository.saveSupplier(supplierData);
  }

  // Delete supplier by ID service method
  async deleteSupplierById(supplierId) {
    return await supplierRepository.deleteSupplierById(supplierId);
  }

  // Update supplier service method
  async updateSupplier(supplierId, newData) {
    return await supplierRepository.updateSupplier(supplierId, newData);
  }
}

module.exports = new SupplierService();
