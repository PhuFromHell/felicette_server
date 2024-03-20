const { json } = require('sequelize');
const { Item } = require('../models/item.model'); // Import model

class ItemRepository {
    
  async findAllItems() {
    console.log("🚀 ~ ItemRepository ~ findAllItems ~ findAllItems:")
    return await Item.findAll();
  }

  async findItemById(itemId) {
    return await Item.findByPk(itemId);
  }

  async saveItem(itemData) {
    return await Item.create(itemData);
  }

  async deleteItemById(itemId) {
    return await Item.destroy({ where: { id: itemId } });
  }

  async updateItemById(itemId, newData) {
    const item = await Item.findByPk(itemId);
    if (!item) {
      return null;
    }
    await item.update(newData);
    return item;
  }
}
module.exports = new ItemRepository();
