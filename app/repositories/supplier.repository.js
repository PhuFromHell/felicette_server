const { throws } = require("assert");
const db = require("../models");
const Supplier = db.Supplier;

class SupplierRepository {
    async findAllSupplier() {
      try {
        const suppliers = await Supplier.findAll();
        return suppliers;
      } catch (error) {
        throw new error(`Error while fetching items: ${error.message}`)
      }
    }

}
module.exports = new SupplierRepository();