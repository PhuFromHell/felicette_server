const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  // Middleware để cung cấp phép CORS
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Tuyến đường API để truy cập dành cho mọi người
  app.get("/api/test/all", controller.allAccess);

  // Tuyến đường API dành cho người dùng đã xác thực
  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  // Tuyến đường API dành cho người dùng có vai trò moderator
  app.get("/api/test/mod", [authJwt.verifyToken, authJwt.isModerator], controller.moderatorBoard);

  // Tuyến đường API dành cho người dùng có vai trò admin
  app.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

  // Tuyến đường API để lấy danh sách người dùng, chỉ dành cho admin
  app.get("/api/user-controller/users", [authJwt.verifyToken, authJwt.isAdmin], controller.getUsers);
};
