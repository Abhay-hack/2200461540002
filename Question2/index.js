const express = require('express');
require('dotenv').config(); 
const stockRoutes = require('./routes/stock');
const stockCorrelationRoutes = require('./routes/stockCorrelation');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/stocks', stockRoutes);
app.use('/stockcorrelation', stockCorrelationRoutes);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});