

<template>
  <main>
    <BookCover :excel-data="excelData" />
    
    <HomeComponent :excel-data="excelData" />
  </main>
</template>

<script lang="ts">
// import 'node_modules/bootstrap/scss/bootstrap.scss';
// import 'node_modules/bootstrap-vue/src/index.scss';
// Import thư viện xlsx
import BookCover from '../components/BookCover.vue'
import HomeComponent from '../components/HomeComponent.vue'
import * as XLSX from 'xlsx';
import { format } from 'date-fns'; // Import format từ thư viện date-fns

export default {
  data() {
    return {
      excelData: [[], [], []], // Dữ liệu từ tệp Excel
    };
  },

  created() {
    // const self = this; // Lưu tham chiếu đến component Vue trong biến self
    // const excelFilePath = '../src/assets/xlsxFile/Dataset.xlsx';

    // // Sử dụng fetch để tải tệp Excel
    // fetch(excelFilePath)
    //   .then((response) => response.arrayBuffer())
    //   .then((data) => {
    //     // Đọc dữ liệu từ tệp Excel
    //     const workbook = XLSX.read(data, { type: 'array' });
    //     const sheet1 = workbook.Sheets[workbook.SheetNames[1]];
    //     const sheet2 = workbook.Sheets[workbook.SheetNames[2]];
    //     const sheet3 = workbook.Sheets[workbook.SheetNames[2]];

    //     // Chuyển dữ liệu từ sheet Excel thành mảng JavaScript
    //     const datasheet1 = XLSX.utils.sheet_to_json(sheet1);
    //     const datasheet2 = XLSX.utils.sheet_to_json(sheet2);
    //     const datasheet3 = XLSX.utils.sheet_to_json(sheet3);

    //     self.excelData = datasheet1;
    //     self.datasheet2 = datasheet2;
    //     self.datasheet2 = datasheet3;
    //   })
    //   .catch((error) => {
    //     console.error('Lỗi khi đọc tệp Excel:', error);
    //   });
    const excelFilePath = '../src/assets/xlsxFile/Dataset.xlsx';

      fetch(excelFilePath)
        .then((response) => response.arrayBuffer())
        .then((data) => {
          const workbook = XLSX.read(data, { type: 'array' });

          // Lặp qua các sheet trong tệp Excel
          for (let i = 0; i < workbook.SheetNames.length; i++) {
            const sheetName = workbook.SheetNames[i];
            const sheet = workbook.Sheets[sheetName];

            // Chuyển đổi dữ liệu từ sheet Excel thành mảng JavaScript
            const sheetData = XLSX.utils.sheet_to_json(sheet);
            
            // Cập nhật mảng excelData với dữ liệu từ mỗi sheet
            this.excelData[i] = sheetData;
          }
        })
        .catch((error) => {
          console.error('Lỗi khi đọc tệp Excel:', error);
        });
  },
  
  components: {
    HomeComponent: HomeComponent,
    BookCover: BookCover
  }
};
</script>