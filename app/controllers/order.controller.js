const db = require('../models');
const order = db.order;

exports.findAll = (req, res) => {
	res.status(200).send({"arr" : ['value 1', 'value 2']});
	// order.findAll().then(order => {
	// 	res.status(200).send("find All OK")
	// 	res.status(200).send({users: users});
	// }).catch(err => {
	// 	res.status(500).send({ message: err.message });
	// });
	console.log('findAll');
};

exports.findFindByID = (req, res) => {
	console.log('findFindByID');
	res.status(200).send({"arr" : Object.values(req.body)});
};

exports.saveOrder = (req, res) => {	
	console.log('saveOrder');
	console.log("🚀 ~ file: order.controller.js:21 ~ req:", req.body);
	res.status(200).send({"arr" : Object.values(req.body)});
};