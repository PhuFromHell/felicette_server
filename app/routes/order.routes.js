const { authJwt } = require("../middleware");
const controller = require("../controllers/order.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // router redirect
  app.get('/api/orders', [authJwt.verifyToken], controller.findAll);
  app.get('/api/orders/:id', [authJwt.verifyToken], controller.findFindByID);
  app.post('/api/orders', [authJwt.verifyToken], controller.saveOrder);
}