// const { Model, DataTypes } = require('sequelize');
// const sequelize =  require('../config/db.config');

// class Item extends Model {} 

// Item.init({
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     supplier_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     quanlity: {
//         type: DataTypes.FLOAT,
//         allowNull: true
//     },
//     branch: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     fabric: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     status: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     image_1: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     image_2: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     image_3: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     image_4: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     image_5: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     create_by: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     edit_by: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     edit_at: {
//         type: DataTypes.DATE,
//         allowNull: true
//     },
//     create_at: {
//         type: DataTypes.DATE,
//         allowNull: true
//     }
// }, {    
//     sequelize,
//     modelName: 'm_items'
// });

// module.exports = Item



module.exports = (sequelize, Sequelize) => {
	const Item = sequelize.define("m_items", {
        // id: {
        //     type: Sequelize.INTEGER,
        //     primaryKey: true
        // },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        supplier_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        quanlity: {
            type: Sequelize.STRING,
            allowNull: true
        },
        branch: {
            type: Sequelize.STRING,
            allowNull: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        fabric: {
            type: Sequelize.STRING,
            allowNull: true
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        image_1: {
            type: Sequelize.STRING,
            allowNull: true
        },
        image_2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        image_3: {
            type: Sequelize.STRING,
            allowNull: true
        },
        image_4: {
            type: Sequelize.STRING,
            allowNull: true
        },
        image_5: {
            type: Sequelize.STRING,
            allowNull: true
        },
        create_by: {
            type: Sequelize.STRING,
            allowNull: true
        },
        edit_by: {
            type: Sequelize.STRING,
            allowNull: true
        },
        edit_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
        create_at: {
            type: Sequelize.DATE,
            allowNull: true
        }
	});
	return Item;
};
