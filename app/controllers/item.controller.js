const db = require('../models');
const Item = db.item;
const pg = require('pg')

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

exports.findAll = async (req, res) => {
  try {
    Item.findOne({
      where: {
      }
    })
      .then(item => {
        if (!item) {
          return res.status(404).send({ message: "User Not found." });
        }
        res.status(200).send({ item });
      })
  } catch (error) {
    next(error);
  }
};

exports.findItemById = async (req, res) => {
  const itemId = req.params.id;
  if (isNaN(itemId)) {
    return res.status(400).json({ message: 'ID không hợp lệ' });
  }

  try {
    Item.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(item => {
        if (!item) {
          return res.status(404).json({ message: 'Mục không tồn tại' });
        }
        res.status(200).send({ item });
      })
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).json({ error: error.message });
  }
};

exports.deleteItemByID = async (req, res) => {

  try {
    Item.delete({
      where: {
        id: req.params.id
      }
    })
      .then(item => {
        if (!item) {
          return res.status(404).json({ message: 'Mục không tồn tại' });
        }
        res.status(200).send({ item });
      })
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).json({ error: error.message });
  }
};

exports.updateItemByID = (req, res) => {
  res.status(200).send({ "arr": Object.values(req.body) });
};
