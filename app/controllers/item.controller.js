// const db = require('../models');
// const Item = db.item;

// exports.saveItem = async (req, res, next) => {
//   try {
//     let obj = req.body;
//     const item = await Item.create(obj);

//     res.status(201).json(item);
//   } catch (error) {
//     console.log("check error", error);
//     next(error);
//   }
// };

// exports.findAll = (req, res) => {
//   res.status(200).send({ "arr": ['value 1', 'value 2'] });
// };

// exports.findFindByID = (req, res) => {
//   res.status(200).send({ "arr": Object.values(req.body) });
// };

// exports.deleteItemByID = (req, res) => {
//   res.status(200).send({ "arr": Object.values(req.body) });
// };

// exports.updateItemByID = (req, res) => {
//   res.status(200).send({ "arr": Object.values(req.body) });
// };


// dongf duoiw day xoa duoc
const itemService = require(itemservice)

// controllers/itemController.js

class ItemController {
  constructor(itemService) {
      this.itemService = itemService;
  }

  async findAllItems(req, res) {
      console.log("🚀 ~ ItemController ~ findAllItems ~ findAllItems: controller")
      // Gọi phương thức findAllItems từ service để lấy danh sách các items
  }

  async findItemById(req, res) {
      console.log("🚀 ~ ItemController ~ findItemById ~ findItemById:", findItemById)
      // Gọi phương thức findItemById từ service để lấy một item dựa trên id
  }

  async createItem(req, res) {
      console.log("🚀 ~ ItemController ~ createItem ~ createItem:", createItem)
      // Gọi phương thức createItem từ service để tạo một item mới
  }

  async updateItem(req, res) {
      console.log("🚀 ~ ItemController ~ updateItem ~ updateItem:", updateItem)
      // Gọi phương thức updateItem từ service để cập nhật một item dựa trên id
  }

  async deleteItem(req, res) {
      console.log("🚀 ~ ItemController ~ deleteItem ~ deleteItem:", deleteItem)
      // Gọi phương thức deleteItem từ service để xóa một item dựa trên id
  }
}

module.exports = ItemController;
