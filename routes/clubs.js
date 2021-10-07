const express = require('express');
const router = express.Router();

router.route('/').get((req, res, next) => {
	return res.send('indexRouter works!')
})

router.route('/:filename/').get((req, res, next) => {
	const filename = req.params.filename;
	return res.send(filename);
})

module.exports = router;
