const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const Role = db.role;

const clentURL = "https://vue-cloudrun-450550597748.asia-southeast1.run.app"

let corsOptions = {
  origin: clentURL
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Nếu muốn chỉ cho phép Vue app Cloud Run truy cập:
// app.use(
//   cors({
//     origin: "https://vue-cloudrun-450550597748.asia-southeast1.run.app", // domain thật của Vue app
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Đạo Huỳnh SPORTS application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Welcome to Đạo Huỳnh SPORTS application.`);
  console.log(`Server is runing on port: ${PORT}`);
});

// create 3 basic role
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });
// function initial() {
//   Role.create({
//     id: 1,
//     name: "admin",
//     createdBy: "admin"
//   });

//   Role.create({
//     id: 2,
//     name: "moderator",
//     createdBy: "admin"
//   });
//   Role.create({
//     id: 3,
//     name: "user",
//     createdBy: "admin"
//   });
// }

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/order.routes')(app);
require('./app/routes/order-detail.routes')(app);
require('./app/routes/item.routes')(app);
require('./app/routes/customer.routes')(app);
require('./app/routes/supplier.router')(app);



