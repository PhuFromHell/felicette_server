const itemRepository = require('../repositories/item.repository'); // Import repository

class ItemService {
  // Find all items service method
  async findAllItems() {
    return await itemRepository.findAllItems();
  }

  // Find item by ID service method
  async findItemById(itemId) {
    return await itemRepository.findItemById(itemId);
  }

  // Save item service method
  async saveItem(itemData) {
    return await itemRepository.saveItem(itemData);
  }

  // Delete item by ID service method
  async deleteItemById(itemId) {
    return await itemRepository.deleteItemById(itemId);
  }

  // Update item service method
  async updateItem(itemId, newData) {
    return await itemRepository.updateItem(itemId, newData);
  }
}

module.exports = new ItemService();
