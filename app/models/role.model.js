module.exports = (sequelize, Sequelize) => {
  // Define the Role model with sequelize
  const Role = sequelize.define("roles", {
    // Define the 'name' column with string type and maximum length of 50 characters
    name: {
      type: Sequelize.STRING(50)
    },
    // Column for 'createdBy' to track the creator of the role
    createdBy: {
      type: Sequelize.STRING(10),
      allowNull: true // Allow null values for createdBy
    },
    // Column for 'updatedBy' to track the updater of the role
    updatedBy: {
      type: Sequelize.STRING(10),
      allowNull: true // Allow null values for updatedBy
    },
  });
  return Role;
};
