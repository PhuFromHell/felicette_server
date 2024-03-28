// const { json } = require('sequelize');
// const Item = require('../models').Item; // Import Item model

// class ItemRepository {

//   async findAllItems() {
    // try {
    //   const items = await Item.findAll();
    //   return items;
    // } catch (error) {
    //   throw new Error(`Error while fetching items: ${error.message}`);
    // }
  //   console.log("🚀 ~ ItemRepository ~ findAllItems ~ items:")

  //   const items = await Item.findAll();
  //   return items;
  // }

  // async findItemById(itemId) {
  //   return await db.Item.findByPk(itemId);
  // }

  // async saveItem(itemData) {
  //   return await Item.create(itemData);
  // }

  // async deleteItemById(itemId) {
  //   return await Item.destroy({ where: { id: itemId } });
  // }

  // async updateItemById(itemId, newData) {
  //   const item = await Item.findByPk(itemId);
  //   if (!item) {
  //     return null;
  //   }
  //   await item.update(newData);
  //   return item;
  // }
// }
// module.exports = new ItemRepository();

const { Item } = require('../models'); // Chú ý đây

class ItemRepository {
  async findAllItems() {
    try {
      const items = await Item.findAll();
      return items;
    } catch (error) {
      throw new Error(`Error while fetching items: ${error.message}`);
    }
  }
}
module.exports = new ItemRepository();
