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

  // router redirect
  app.get('/api/items', [authJwt.verifyToken], controller.findAll);
  app.get('/api/items/:id', [authJwt.verifyToken], controller.findFindByID);
  app.post('/api/items', [authJwt.verifyToken], controller.saveItem);
  app.delete('/api/items/:id', [authJwt.verifyToken], controller.deleteItemByID);
  app.patch('/api/items/:id', [authJwt.verifyToken], controller.updateItemByID);
}