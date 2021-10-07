const express = require('express');
const router = express.Router();
const path = require('path');
const csv = require('../data');

router.route('/').get((req, res, next) => {
	return res.send('indexRouter works!')
})

router.route('/:filename/').get((req, res, next) => {
	const filename = req.params.filename;
	const filePath = path.join(__dirname, '..', 'data', filename + ".csv");

	const toSend =  csv(filePath);
	res.json(toSend);
})

module.exports = router;
