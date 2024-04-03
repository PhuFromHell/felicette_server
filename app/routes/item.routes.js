const { authJwt } = require("../middleware"); // Import authentication middleware
const ItemController = require("../controllers/item.controller"); // Import item controller

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
  // Endpoint to retrieve all items, authentication required
  app.get('/api/items', [authJwt.verifyToken], ItemController.findAllItems);

  // Endpoint to retrieve a specific item by ID, authentication required
  app.get('/api/items/:id', [authJwt.verifyToken], ItemController.findItemById);

  // Endpoint to delete a specific item by ID, authentication required
  app.delete('/api/items/:id', [authJwt.verifyToken], ItemController.deleteItemById);

  // Endpoint to update a specific item by ID, authentication required
  app.put('/api/items/:id', [authJwt.verifyToken], ItemController.updateItem);

  // Endpoint to create a new item, authentication required
  app.post('/api/items', [authJwt.verifyToken], ItemController.saveItem);
};
