const db = require('../models');
const User = db.user;

exports.getUsers = (req, res) => {
  User.findAll().then(users => {
    for (const key in users) {
      // remote password in object for client
      if (Object.hasOwnProperty.call(users, key)) {
        users[key] = users[key].dataValues;
        delete users[key].password;
      }
    }
    res.status(200).send({ users: users });
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
