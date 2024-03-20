const { authJwt } = require("../middleware");
const ItemController = require('../controllers/item.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Định nghĩa các tuyến đường và gắn chúng với các phương thức tương ứng trong ItemController
  app.get('/api/items', ItemController.findAllItems);
  app.get('/api/items/:id', ItemController.findItemById);
  app.post('/api/items', ItemController.saveItem);
  app.delete('/api/items/:id', ItemController.deleteItemById); // Sửa tên của phương thức deleteItemByID thành deleteItemById
  app.patch('/api/items/:id', ItemController.updateItemById); // Sửa tên của phương thức updateItemByID thành updateItemById
}
