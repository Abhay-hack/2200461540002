const stockService = require('../services/stockService');

exports.getStockData = async (req, res, next) => {
    try {
        const { ticker } = req.params;
        const { minutes, aggregation } = req.query;
        const result = await stockService.getStockData(ticker, minutes, aggregation);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

exports.getAllStocks = async (req, res, next) => {
    try {
        const stocks = await stockService.getAllStocks();
        res.json(stocks);
    } catch (error) {
        next(error);
    }
};