const express = require('express')
var cors = require('cors');
const app = express()
const notFound = require('./notFound')

const symbols = require('./symbols.json')
const historical = require('./historical.json')

app.use(cors());

app.get('/api/symbols/', function (required, response, next) {
    response.json(symbols);
});

app.get('/api/historical', function (required, response, next) {
    response.json(historical);
});

app.get('/api/symbols/:symbol', function (required, response, next) {
    const symbolIn = required.params.symbol;
    const result = symbols.symbolsList.filter((s) => s.symbol === symbolIn);
    response.send(result[0]);
  });
  
  app.get('/api/historical/:symbol', function (required, response, next) {
    const symbolIn = required.params.symbol;
    const result = historical.historicalStockList.filter((h) => h.symbol === symbolIn);
    response.send(result[0]);
  });

app.use(notFound);

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})