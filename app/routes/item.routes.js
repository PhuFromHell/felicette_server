const { authJwt } = require("../middleware");
const controller = require("../controllers/item.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // router redirect item controller
  app.post('/api/items', [authJwt.verifyToken], controller.saveItem);
  app.get('/api/items', [authJwt.verifyToken], controller.findAll);
  // Route GET để lấy một mục theo ID
  app.get('/api/items/:id', [authJwt.verifyToken], controller.findItemById);
  // Route DELETE để xóa một mục theo ID
  app.delete('/api/items/:id', [authJwt.verifyToken], controller.deleteItemByID);
  app.patch('/api/items/:id', [authJwt.verifyToken], controller.updateItemByID);
}