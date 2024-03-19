module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    name: {
      type: Sequelize.STRING
    },
    // Cột createdBy
    createdBy: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // Cột updatedBy
    updatedBy: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // Cột updatedAt vì sequelize sẻ tự tạo 3 cột là id, createdAt, updatedAt nên không cần thiết phải tạo 3 cột này
    // updatedAt: {
    //   type: Sequelize.DATE,
    //   allowNull: true
    // }
    // Cột createdAt
    // createdAt: {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.NOW
    // },
    // id: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true
    // },
  });
  return Role;
};
