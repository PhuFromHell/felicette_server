// services/itemService.js

class ItemService {
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }

    async findAllItems() {
        // Gọi phương thức findAll từ repository để lấy danh sách các items
    }

    async findItemById(id) {
        // Gọi phương thức findById từ repository để lấy một item dựa trên id
    }

    async createItem(itemData) {
        // Gọi phương thức create từ repository để tạo một item mới
    }

    async updateItem(id, newData) {
        // Gọi phương thức update từ repository để cập nhật một item dựa trên id
    }

    async deleteItem(id) {
        // Gọi phương thức delete từ repository để xóa một item dựa trên id
    }
}

module.exports = ItemService;
