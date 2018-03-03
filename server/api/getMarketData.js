const request = require( 'superagent')
const bodyParser = require('body-parser')
const sort = require('../sort-test')

let coin_prices = []
let numberOfRequests = 0
let results = []
let coinNames = []

  module.exports = function getMarketData (options) {
    return new Promise ( (resolve, reject) => {
      request
        .get(options.URL)
          .then((res) => {
            let data = res.body
            console.log('Success', options.marketName)
            if (options.marketName) {
              options.last(data, coin_prices)
              .then((newCoinPrices) => {
                numberOfRequests++
                resolve(newCoinPrices)
                console.log(newCoinPrices)
                console.log('sending to spread calc')
                if (numberOfRequests >= 2) sort(newCoinPrices)
              })
            } else {
              resolve(coin_prices)
            }
          })
    })
  }
