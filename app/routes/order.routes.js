const { authJwt } = require("../middleware");
const orderController = require("../controllers/order.controller");

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
  // Endpoint to retrieve all orders, authentication required
  app.get('/api/orders/find-all', [authJwt.verifyToken], orderController.findAllOrders);

  // Endpoint to retrieve a specific order by ID, authentication required
  app.get('/api/orders/find-by-id/:id', orderController.findOrderById);

  // Endpoint to retrieve orders with conditions, authentication required
  app.get('/api/orders/search/', orderController.fetchOrdersWithConditions);

  // Endpoint to delete a specific order by ID, authentication required
  app.delete('/api/orders/delete-by-id/:id', orderController.deleteOrderById);

  // Endpoint to update a specific order by ID, authentication required
  app.put('/api/orders/update', orderController.updateOrder);

  // Endpoint to create a new order, authentication required
  app.post('/api/orders/save', orderController.saveOrder);
};
