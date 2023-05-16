const db = require('../models');
const Item = db.item;

exports.saveItem = async (req, res, next) => {
  try {
    let obj = req.body;
    const item = await Item.create(obj);

    res.status(201).json(item);
  } catch (error) {
    console.log("check error", error);
    next(error);
  }
};

exports.findAll = (req, res) => {
  res.status(200).send({ "arr": ['value 1', 'value 2'] });
};

exports.findFindByID = (req, res) => {
  res.status(200).send({ "arr": Object.values(req.body) });
};

exports.deleteItemByID = (req, res) => {
  res.status(200).send({ "arr": Object.values(req.body) });
};

exports.updateItemByID = (req, res) => {
  res.status(200).send({ "arr": Object.values(req.body) });
};
