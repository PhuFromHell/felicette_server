const { authJwt } = require("../middleware");
const orderController = require("../controllers/order-detail.controller");

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
  // app.get('/api/order-detail', orderController.findAllorder-details);
  
  app.get('/api/order-detail', orderController.findAllOrderDetails);

  // // Endpoint to retrieve a specific order by ID, authentication required
  app.get('/api/order-detail/:id', orderController.findOrderDetailById);

  // // Endpoint to delete a specific order by ID, authentication required
  app.delete('/api/order-detail/:id', orderController.deleteOrderDetailById);

  // // Endpoint to update a specific order by ID, authentication required
  app.put('/api/order-detail', orderController.updateOrderDetail);

  // // Endpoint to create a new order, authentication required
  app.post('/api/order-detail', orderController.saveOrderDetail);
};
