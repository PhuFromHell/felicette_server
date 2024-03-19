const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const Role = db.role;

let corsOptions = {
  origin: "http:/localhost:8080"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
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
require('./app/routes/item.routes')(app);



