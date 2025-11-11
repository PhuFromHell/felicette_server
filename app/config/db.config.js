module.exports = {
  // HOST: "localhost",
  // USER: "postgres",
  // PASSWORD: "123",
  // DB: "felicette_server",
  // dialect: "postgres",


  HOST: "ep-gentle-fire-adrhap87-pooler.c-2.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_eQY0jmkoGOF1",
  DB: "felicette_server",
  dialect: "postgres",
  // ⚙️ Bắt buộc dùng SSL vì Neon yêu cầu
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // tránh lỗi tự ký chứng chỉ
    },
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};