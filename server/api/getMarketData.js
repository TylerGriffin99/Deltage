const request = require( 'superagent')
const bodyParser = require('body-parser')
//import {poloniex} from './settings.js'

let coin_prices = {}
let numberOfRequests = 0
let results = []
coinNames = []

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
                if (numberOfRequests >= 1) computePrices(coin_prices)
              })
            } else {
              resolve(coin_prices)
            }
          })
    })
  }

function calculateSpread (data) {
  results = []

  function loopData () {
    if (numberOfRequests >= 2) {
      for (let coin in data) {
        if (Object.keys(data[coin]).length > 1) {
          if(!coinNames.includes(coin)) {coinNames.push(coin)}
          let arr = []
          for (let markets in data[coin]) {
            arr.push(data[coin][market], market)
          }
          arr.sort(function (a, b) {
            
          })
        }
      }
    }
  }
}