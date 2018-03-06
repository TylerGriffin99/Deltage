const retrieveLastCur = (symbol) => {
  return symbol.slice(symbol.length - 3, symbol.length)
}

function processLiveCoin (data, coinPriceData) {
  data.map(coinPairData => {
    if (retrieveLastCur(coinPairData.symbol) === 'BTC') {
      let added = false
      let coinComparison = coinPairData.cur
      coinPriceData.map(coin => {
        if (coin.coin === coinComparison && coinPairData.last > 0) {
          coin.exchanges.push({
            name: 'livecoin',
            lastPrice: coinPairData.last,
            highestBid: coinPairData.best_bid,
            lowestAsk: coinPairData.min_ask,
            volume: coinPairData.volume
          })
          added = true
        }
      })
      if (!added && coinPairData.last > 0) {
        let list = {
          coin: '',
          exchanges: []
        }
        list.coin = coinComparison
        list.exchanges.push({
          name: 'livecoin',
          lastPrice: coinPairData.last,
          highestBid: coinPairData.best_bid,
          lowestAsk: coinPairData.min_ask,
          volume: coinPairData.volume
        })
        coinPriceData.push(list)
      }
    }
  })
}

module.exports = {
  processLiveCoin,
  retrieveLastCur
}
