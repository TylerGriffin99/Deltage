const request = require( 'superagent')
const bodyParser = require('body-parser')
//import {poloniex} from './settings.js'

let coin_prices = {}
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
                if (numberOfRequests >= 1) calculateSpread(coin_prices)
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
    console.log('here')
    if (numberOfRequests >= 2) {
      for (let coin in data) {
        if (Object.keys(data[coin]).length > 1) {
          if(!coinNames.includes(coin)) coinNames.push(coin) 
          let arr = []
          for (let markets in data[coin]) {
            arr.push([data[coin][markets], markets])
          }
          arr.sort(function (a, b) {
            return a[0] - b[0]
          })
          for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j< arr.length; j++) {
              results.push(
                {coin: coin,
                spread: arr[i][0] / arr[j][0],
                market2: {
                  name: arr[i][1],
                  last: arr[i][0]
                },
                market1: {
                name: arr[j][1],
                last: arr[j][0]
                },
              },
              {// TODO, shouldnt have to create duplicate object for same markets
                coin: coin,
                spread: arr[j][0] / arr[i][0],
                market2: {
                  name: arr[j][1],
                  last: arr[j][0]
                },
                market1: {
                  name: arr[i][1],
                  last: arr[i][0]
                }

              }
              ) // end push
            } // end for - j
          } // end for - i
           console.log(results)
        } // end if obj.keys
      } // end initial for loop
      results.sort(function (a, b) {
        return a.spread - b.spread
      })
      console.log(results)
      console.log('finishing sort function')
      // resolve()
    }
  }
  loopData()
}