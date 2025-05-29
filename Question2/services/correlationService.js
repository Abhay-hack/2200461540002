const apiUtils = require('../utils/apiUtils');
const dataUtils = require('../utils/dataUtils');

exports.getStockCorrelation = async (minutes, ticker1, ticker2) => {
  try {
    const apiUrl1 = `/stocks/${ticker1}?minutes=${minutes}`;
    const apiUrl2 = `/stocks/${ticker2}?minutes=${minutes}`;

    const response1 = await apiUtils.fetchData(apiUrl1);
    const response2 = await apiUtils.fetchData(apiUrl2);

    const priceHistory1 = response1.stock.priceHistory;
    const priceHistory2 = response2.stock.priceHistory;

    const averagePrice1 = dataUtils.calculateAveragePrice(priceHistory1);
    const averagePrice2 = dataUtils.calculateAveragePrice(priceHistory2);

    const correlation = dataUtils.calculateCorrelation(priceHistory1, priceHistory2);

    return {
      correlation,
      stocks: {
        [ticker1]: { averagePrice: averagePrice1, priceHistory: priceHistory1 },
        [ticker2]: { averagePrice: averagePrice2, priceHistory: priceHistory2 },
      },
    };
  } catch (error) {
    throw new Error(`Failed to calculate correlation: ${error.message}`);
  }
};