const moment = require('moment')

module.exports = function sort (data) {
  const validPairs = data.filter(coinData => { return coinData.exchanges.length > 1 })

  const allPairs = validPairs.map(coinData => {
    const sortedCoin = {
      coin: coinData.coin,
      timestamp: moment()
    }
    const sortedExch = coinData.exchanges.sort((a, b) => {
      return b.lastPrice - a.lastPrice
    })
    const high = sortedExch[0]
    const low = sortedExch[sortedExch.length - 1]
    sortedCoin.buy = low
    sortedCoin.sell = high
    sortedCoin.allExchanges = sortedExch.map(exch => exch)
    sortedCoin.diff = (high.lastPrice - low.lastPrice) / high.lastPrice * 100

    return sortedCoin
  })
  const sortedPairs = allPairs.sort((a, b) => {
    return b.diff - a.diff
  })

  if (sortedPairs.length > 4) {
    const topFive = [sortedPairs[0], sortedPairs[1], sortedPairs[2], sortedPairs[3], sortedPairs[4]]
    // console.log('this is top five')
    console.log(topFive)
    return topFive
  } else {
    // console.log('this is sorted pairs:')
    // console.log(sortedPairs)
    return sortedPairs
  }
}
