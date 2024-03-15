module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "user_temp"
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "user_temp@gmail.com"
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "0XXXXXXXX"
    },
    birthday: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    joiningDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    delFlg: {
      type: Sequelize.STRING,
      allowNull: true
    },
    note: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // Cột createdBy
    createdBy: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // Cột createdAt
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    // Cột editedBy
    updatedBy: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // Cột editedAt
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true
    }
  });
  return User;
};
