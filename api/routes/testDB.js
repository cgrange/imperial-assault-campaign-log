const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.send('on testDB');
});

module.exports = router;