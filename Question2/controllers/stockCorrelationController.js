const correlationService = require('../services/correlationService');

exports.getStockCorrelation = async (req, res, next) => {
  try {
    const { minutes, ticker1, ticker2 } = req.query;

    if (!minutes || !ticker1 || !ticker2) {
      return res.status(400).json({ error: 'Missing parameters: minutes, ticker1, and ticker2 are required.' });
    }

    const result = await correlationService.getStockCorrelation(minutes, ticker1, ticker2);
    res.json(result);
  } catch (error) {
    next(error);
  }
};