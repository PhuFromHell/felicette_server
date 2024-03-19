module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "0000000000"
    },
    birthday: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: new Date(Date.UTC(2000, 1, 1))
    },
    joiningDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    delFlg: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "0"
    },
    note: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // Cột createdBy
    createdBy: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "admin"
    },
    updatedBy: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // Cột updatedAt vì sequelize sẻ tự tạo 3 cột là id, createdAt, updatedAt nên không cần thiết phải tạo 3 cột này
    // createdAt: {
    //   type: Sequelize.DATE,
    //   defaultValue: Sequelize.NOW,
    //   allowNull: false
    // },
    // Cột editedBy
    // Cột editedAt
    // updatedAt: {
    //   type: Sequelize.DATE,
    //   allowNull: true
    // }
    // id: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true
    // },
  });
  return User;
};
