exports.calculateAveragePrice = (priceHistory) => {
  if (!priceHistory || priceHistory.length === 0) {
    return 0;
  }

  const sum = priceHistory.reduce((total, item) => total + item.price, 0);
  return sum / priceHistory.length;
};

exports.calculateCorrelation = (priceHistory1, priceHistory2) => {
  if (!priceHistory1 || !priceHistory2 || priceHistory1.length === 0 || priceHistory2.length === 0) {
    return 0;
  }
  const minLength = Math.min(priceHistory1.length, priceHistory2.length);
  const trimmedHistory1 = priceHistory1.slice(0, minLength);
  const trimmedHistory2 = priceHistory2.slice(0, minLength);

  const avgX = exports.calculateAveragePrice(trimmedHistory1);
  const avgY = exports.calculateAveragePrice(trimmedHistory2);

  let covariance = 0;
  let stdDevX = 0;
  let stdDevY = 0;

  for (let i = 0; i < trimmedHistory1.length; i++) {
    covariance += (trimmedHistory1[i].price - avgX) * (trimmedHistory2[i].price - avgY);
    stdDevX += (trimmedHistory1[i].price - avgX) ** 2;
    stdDevY += (trimmedHistory2[i].price - avgY) ** 2;
  }

  covariance /= (trimmedHistory1.length - 1);
  stdDevX = Math.sqrt(stdDevX / (trimmedHistory1.length - 1));
  stdDevY = Math.sqrt(stdDevY / (trimmedHistory2.length - 1));

  if (stdDevX === 0 || stdDevY === 0) {
    return 0;
  }

  return covariance / (stdDevX * stdDevY);
};