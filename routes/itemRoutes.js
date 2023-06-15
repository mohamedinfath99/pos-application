const express = require('express');
const { createItem, getItems } = require('../controllers/itemController');

const router = express.Router();

router.post('/create', createItem);
router.get('/get', getItems);

module.exports = router;