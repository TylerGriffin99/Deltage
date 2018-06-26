const {COIN_DATA} = require('../common/events')
const getMarketData = require('./api/getMarketData')
const markets = require('./api/markets')
const sort = require('./sortFn')

function callMarkets (sockets) {
  const marketData = markets.map(market => {
    return getMarketData(market)
  })
  return Promise.all(marketData)
    .then(marketResults => {
      let coinPrices = []
      for (let i = 0; i < markets.length; i++) {
        markets[i].last(marketResults[i], coinPrices)
      }
      sockets.forEach((socket) => socket.emit(COIN_DATA, sort(coinPrices)))
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err.message)
    })
}

module.exports = callMarkets
