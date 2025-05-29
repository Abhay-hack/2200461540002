const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.get('/:ticker', stockController.getStockData);
router.get('/', stockController.getAllStocks);

module.exports = router;