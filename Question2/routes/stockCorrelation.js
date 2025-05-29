const express = require('express');
const router = express.Router();
const stockCorrelationController = require('../controllers/stockCorrelationController');

router.get('/', stockCorrelationController.getStockCorrelation);

module.exports = router;