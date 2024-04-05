const { authJwt } = require("../middleware"); // Import authentication middleware
const CustomerController = require("../controllers/customer.controller"); // Import customer controller

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
  // Endpoint to retrieve all customers, authentication required
  app.get('/api/customers', CustomerController.findAllCustomers);

  // Endpoint to retrieve a specific customer by ID, authentication required
  app.get('/api/customers/:id', CustomerController.findCustomerById);

  // Endpoint to delete a specific customer by ID, authentication required
  app.delete('/api/customers/:id', CustomerController.deleteCustomerById);

  // Endpoint to update a specific customer by ID, authentication required
  app.put('/api/customers/:id', CustomerController.updateCustomer);

  // Endpoint to create a new customer, authentication required
  app.post('/api/customers', CustomerController.saveCustomer);
};
