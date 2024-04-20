const db = require("../models");
const Item = db.Item;

class ItemRepository {
  // Find all items in the database
  async findAllItems() {
    try {
      const items = await Item.findAll();
      return items;
    } catch (error) {
      throw new Error(`Error while fetching items: ${error.message}`);
    }
  }

  // Find an item by its ID
  async findItemById(itemId) {
    try {
      const item = await Item.findByPk(itemId);
      return item;
    } catch (error) {
      throw new Error(`Error while fetching items: ${error.message}`);
    }
  }

  // Save a new item to the database
  async saveItem(itemData) {
    try {
      const item = await Item.create(itemData);
      return item;
    } catch (error) {
      throw new Error(`Error while saving item: ${error.message}`);
    }
  }

  // Delete an item by its ID
  async deleteItemById(itemId) {
    try {
      await Item.destroy({ where: { id: itemId } });
      return true; // Deletion successful
    } catch (error) {
      throw new Error(`Error while deleting item: ${error.message}`);
    }
  }

  // Update an item by its ID with new data
  async updateItem(itemId, newData) {
    try {
      const item = await Item.findByPk(itemId);
      if (!item) {
        return null; // Return null if item does not exist
      }
      await item.update(newData);
      return item;
    } catch (error) {
      throw new Error(`Error while updating item: ${error.message}`);
    }
  }
}

module.exports = new ItemRepository();
