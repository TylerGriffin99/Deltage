const {COIN_DATA} = require('../common/events')

const getMarketData = require('./api/getMarketData')
const markets = require('./api/markets')
const sort = require('./sortFn')

function callMarkets (socket) {
  const marketData = markets.map(market => {
    return getMarketData(market)
  })
  return Promise.all(marketData)
    .then(exchanges => {
      let coinPrices = []
      for (let i = 0; i < markets.length; i++) {
        markets[i].last(exchanges[i], coinPrices)
      }
      exchanges.map(data => socket.emit(COIN_DATA, sort(coinPrices)))
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err.message)
    })
}

module.exports = function (socket) {
  setInterval(() => {
    callMarkets(socket)
  }, 13000)
}
