const chop = (input) => {
  return input.slice(1, input.length)
}

const removeBTC = (string) => {
  const chopped = chop(string)
  return chopped.replace(/BTC/g, '')
}

function processBitfinex (data, coinPriceData) {
  data.map(coinPairData => {
    if (coinPairData[0].includes('BTC')) {
      let added = false
      let coinComparison = removeBTC(coinPairData[0])
      coinPriceData.map(coin => {
        if (coin.coin === coinComparison) {
          coin.exchanges.push({
            name: 'bitfinex',
            lastPrice: coinPairData[7],
            highestBid: coinPairData[1],
            lowestAsk: coinPairData[3],
            volume: coinPairData[8]
          })
          added = true
        }
      })
      if (!added) {
        let list = {
          coin: '',
          exchanges: []
        }
        list.coin = coinComparison
        list.exchanges.push({
          name: 'bitfinex',
          lastPrice: coinPairData[7],
          highestBid: coinPairData[1],
          lowestAsk: coinPairData[3],
          volume: coinPairData[8]
        })
        coinPriceData.push(list)
      }
    }
  })
}

module.exports = {
  processBitfinex,
  chop,
  removeBTC
}
