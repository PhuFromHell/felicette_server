const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const Role = db.role;

var corsOptions = {
  origin: "http:/localhost:8081"
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
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}


// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);



