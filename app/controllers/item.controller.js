const itemService = require('../services/item.service'); // Import service

class ItemController {
  // Find all items controller
  async findAllItems(req, res) {
    try {
      const items = await itemService.findAllItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Find item by ID controller
  async findItemById(req, res) {
    const itemId = req.params.id;
    try {
      const item = await itemService.findItemById(itemId);
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Save item controller
  async saveItem(req, res) {
    const itemData = req.body;
    try {
      const newItem = await itemService.saveItem(itemData);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete item by ID controller
  async deleteItemById(req, res) {
    const itemId = req.params.id;
    try {
      const result = await itemService.deleteItemById(itemId);
      if (!result) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.json({ message: "Item deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Update item by ID controller
  async updateItem(req, res) {
    const itemId = req.params.id;
    const newData = req.body;
    try {
      const updatedItem = await itemService.updateItem(itemId, newData);
      if (!updatedItem) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.json(updatedItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ItemController();
