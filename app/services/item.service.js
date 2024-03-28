const itemRepository = require('../repositories/item.repository'); // Import repository

class ItemService {
  async findAllItems() {
    return await itemRepository.findAllItems();
  }

  async findItemById(itemId) {
    return await itemRepository.findItemById(itemId);
  }

  async saveItem(itemData) {
    return await itemRepository.saveItem(itemData);
  }

  async deleteItemById(itemId) {
    return await itemRepository.deleteItemById(itemId);
  }

  async updateItemById(itemId, newData) {
    return await itemRepository.updateItemById(itemId, newData);
  }
}

module.exports = new ItemService();
