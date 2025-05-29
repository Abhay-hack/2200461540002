const apiUtils = require('../utils/apiUtils');

exports.getStockData = async (ticker, minutes, aggregation) => {
    try {
        const apiUrl = `/stocks/${ticker}?minutes=${minutes}`;
        const response = await apiUtils.fetchData(apiUrl);
        return response;
    } catch (error) {
        throw new Error(`Failed to fetch stock data for ${ticker}: ${error.message}`);
    }
};

exports.getAllStocks = async () => {
    try {
        const response = await apiUtils.getAllStocks();
        return response;
    } catch (error) {
        throw new Error(`Failed to fetch all stocks: ${error.message}`);
    }
};