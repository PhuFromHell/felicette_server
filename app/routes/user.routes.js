const { authJwt } = require("../middleware");
const userController = require("../controllers/user.controller");

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
  app.get("/api/test/all", userController.allAccess);

  // Route for accessing API for authenticated users
  app.get("/api/test/user", [authJwt.verifyToken], userController.userBoard);

  // Route for accessing API for users with moderator role
  app.get("/api/test/mod", [authJwt.verifyToken, authJwt.isModerator], userController.moderatorBoard);

  // Route for accessing API for users with admin role
  app.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);

  // Route for accessing API for users with admin role
  app.get("/api/test/moderator-or-admin", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], userController.moderatorOrAdminBoard);

  // Route for getting user list, restricted to admin only
  app.get("/api/user-controller/users", [authJwt.verifyToken, authJwt.isAdmin], userController.getUsers);
};
