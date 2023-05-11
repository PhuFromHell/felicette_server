const db = require('../models');
console.log("🚀 ~ file: item.controller.js:2 ~ db:", db);
const Item = db.item;
// const Item = require("../models/item.model");



exports.findAll = (req, res) => {
	console.log('findAll');
	res.status(200).send({"arr" : ['value 1', 'value 2']});
};

exports.findFindByID = (req, res) => {
	console.log('findFindByID');
	res.status(200).send({"arr" : Object.values(req.body)});
};

exports.saveItem = async (req, res, next) => {	
	// console.log('saveItem');
	// console.log("🚀 ~ file: item.controller.js:21 ~ req:", req.body);
	// res.status(200).send({"arr" : Object.values(req.body)});
    try {
        let obj = req.body;
        console.log("🚀 ~ file: item.controller.js:24 ~ exports.saveItem= ~ obj:", obj)
        // const { id, name, supplier_name, quanlity, branch, description, fabric, status, image_1, image_2, image_3, image_4, image_5, create_by, edit_by, edit_at, create_at } = req.body;
        // console.log(req.body);
        // console.log(obj); // Check if obj is undefined or null
        // console.log(obj === undefined); // Check if obj is undefined
        // console.log(obj === null); // Check if obj is null
        // console.log(typeof obj); // Check the type of obj
        // console.log(obj.create); // Check if the create method exists on obj
        const item = await Item.create(obj);

        res.status(201).json(item);
    } catch (error) {
        console.log("check error", error);
        next(error);
    }
};

exports.deleteItemByID = (req, res) => {	
	console.log('deleteItemByID');
	console.log("🚀 ~ file: item.controller.js:21 ~ req:", req.body);
	res.status(200).send({"arr" : Object.values(req.body)});
};

exports.updateItemByID = (req, res) => {	
	console.log('updateItemByID');
	console.log("🚀 ~ file: item.controller.js:21 ~ req:", req.body);
	res.status(200).send({"arr" : Object.values(req.body)});
};
