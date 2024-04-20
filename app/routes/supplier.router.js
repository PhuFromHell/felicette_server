const { authJwt } = require("../middleware"); // Import authentication middleware
const supplierController = require("../controllers/supplier.controller"); // Import supplier controller

module.exports = function (app) {
  // Middleware to enable CORS permissions
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Route for accessing API for everyone
  // Endpoint to retrieve all suppliers, authentication required
  app.get('/api/suppliers', supplierController.findAllSuppliers);

  // Endpoint to retrieve a specific supplier by ID, authentication required
  app.get('/api/suppliers/:id', supplierController.findSupplierById);

  // Endpoint to delete a specific supplier by ID, authentication required
  app.delete('/api/suppliers/:id', supplierController.deleteSupplierById);

  // Endpoint to update a specific supplier by ID, authentication required
  app.put('/api/suppliers/:id', supplierController.updateSupplier);

  // Endpoint to create a new supplier, authentication required
  app.post('/api/suppliers', supplierController.saveSupplier);
};
