const request = require('superagent')
const sort = require('../sortFn')

let coinPrices = []
let numberOfRequests = 0

module.exports = function getMarketData (options) {
  return new Promise((resolve, reject) => {
    request
      .get(options.URL)
      .then((res) => {
        let data = res.body
        console.log('Success', options.marketName)
        if (options.marketName) {
          options.last(data, coinPrices)
            .then((newCoinPrices) => {
              numberOfRequests++
              resolve(newCoinPrices)
              console.log(newCoinPrices)
              console.log('sending to spread calc')
              if (numberOfRequests >= 2) sort(newCoinPrices)
            })
        } else {
          resolve(coinPrices)
        }
      })
  })
}
