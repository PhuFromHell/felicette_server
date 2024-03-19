const db = require('../models');
const order = db.order;

exports.findAll = (req, res) => {
  res.status(200).send({ "arr": Object.values(req.body) });
};

exports.findFindByID = (req, res) => {
  res.status(200).send({ "arr": Object.values(req.body) });
};

exports.saveOrder = (req, res) => {
  res.status(200).send({ "arr": Object.values(req.body) });
};