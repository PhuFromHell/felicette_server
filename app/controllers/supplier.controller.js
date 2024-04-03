const supplierService = require('../services/supplier.service'); // Import service

class SupplierController {
  // Find all suppliers controller
  async findAllSuppliers(req, res) {
    console.log("🚀 ~ SupplierController ~ findAllSuppliers ~ req:", req)
    try {
      const suppliers = await supplierService.findAllSuppliers();
      res.json(suppliers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Find supplier by ID controller
  async findSupplierById(req, res) {
    const supplierId = req.params.id;
    try {
      const supplier = await supplierService.findSupplierById(supplierId);
      if (!supplier) {
        return res.status(404).json({ message: "Supplier not found" });
      }
      res.json(supplier);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Save supplier controller
  async saveSupplier(req, res) {
    const supplierData = req.body;
    try {
      const newSupplier = await supplierService.saveSupplier(supplierData);
      res.status(201).json(newSupplier);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete supplier by ID controller
  async deleteSupplierById(req, res) {
    const supplierId = req.params.id;
    try {
      const result = await supplierService.deleteSupplierById(supplierId);
      if (!result) {
        return res.status(404).json({ message: "Supplier not found" });
      }
      res.json({ message: "Supplier deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update supplier by ID controller
  async updateSupplier(req, res) {
    const supplierId = req.params.id;
    const newData = req.body;
    try {
      const updatedSupplier = await supplierService.updateSupplier(supplierId, newData);
      if (!updatedSupplier) {
        return res.status(404).json({ message: "Supplier not found" });
      }
      res.json(updatedSupplier);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new SupplierController();
