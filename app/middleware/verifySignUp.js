const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }
    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }
      next();
    });
  });
};
const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    const roles = Array.isArray(req.body.roles) ? req.body.roles : [req.body.roles];
    for (let role of roles) {
      if (!ROLES.includes(role)) {
        return res.status(400).send({
          message: "Failed! Role does not exist: " + role
        });
      }
    }
  }
  next();
};


const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};
module.exports = verifySignUp;
