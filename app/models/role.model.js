module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    // Cột createdBy
    createdBy: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // Cột createdAt
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    // Cột editedBy
    editedBy: {
      type: Sequelize.STRING,
      allowNull: true
    },
    // Cột editedAt
    editedAt: {
      type: Sequelize.DATE,
      allowNull: true
    }
  });
  return Role;
};
