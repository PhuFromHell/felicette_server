// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/db.config');

// module.exports = (sequelize, Sequelize) => {
//   const Item = sequelize.define("items", {
//     itemName: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     supplierName: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     quality: {
//       type: Sequelize.STRING(10),
//       allowNull: true
//     },
//     branch: {
//       type: Sequelize.STRING(10),
//       allowNull: true
//     },
//     color: {
//       type: Sequelize.STRING(7),
//       allowNull: true
//     },
//     origin: {
//       type: Sequelize.STRING(15),
//       allowNull: true
//     },
//     description: {
//       type: Sequelize.TEXT,
//       allowNull: true
//     },
//     fabric: {
//       type: Sequelize.STRING,
//       allowNull: true
//     },
//     status: {
//       type: Sequelize.INTEGER,
//       allowNull: false
//     },
//     image1: {
//       type: Sequelize.STRING,
//       allowNull: true
//     },
//     image2: {
//       type: Sequelize.STRING,
//       allowNull: true
//     },
//     image3: {
//       type: Sequelize.STRING,
//       allowNull: true
//     },
//     image4: {
//       type: Sequelize.STRING,
//       allowNull: true
//     },
//     image5: {
//       type: Sequelize.STRING,
//       allowNull: true
//     },
//     delFlg: {
//       type: Sequelize.STRING,
//       allowNull: true
//     },
//     createdBy: {
//       type: Sequelize.STRING,
//       allowNull: true
//     },
//     updatedBy: {
//       type: Sequelize.STRING,
//       allowNull: true
//     },
//   });
//   return Item;
// };


// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/db.config');

// class Item extends Model { }

// Item.init({
//   itemName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   supplierName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   sequelize,
//   modelName: 'Item'
// });

// module.exports = Item;


const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class Item extends Model {}

  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'items'
  });

  return Item;
};
