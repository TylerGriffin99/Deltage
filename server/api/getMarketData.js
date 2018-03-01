const request = require( 'superagent')
const bodyParser = require('body-parser')
//import {poloniex} from './settings.js'

let coin_prices = {}
let numberOfRequests = 0
let results = []

const poloniex = {
  marketName: 'poloniex',
  URL: 'https://poloniex.com/public?command=returnTicker',
  toBTCURL: false,
  pairURL: '',

  last: function (data) { // Where to find the last price of coin in JSON data
    return new Promise(function (res, rej) {
      try {
        // loop over values in the response data
        // this is really important. this creates the coin_prices array
        // once completed running over all responses from api call it will return an array
        // that days the exchange: bitrex and the last price:
        // {EOS: {bitrex: 0.002, poloniex: 0.333, kraken: 0.002},
        //  PAY: {bitrex: 003, poloniex: 0.004, kraken: 0.0002} }  etc
        for (var obj in data) {
          // if the responce has BTC in it and is not EMc2 pair
          if (obj.includes('BTC_') && obj !== 'BTC_EMC2') {
            // replace BTC_ with null - this removes the bBTC part and shows only the coins names that pair with BTC
            let coinName = obj.replace('BTC_', '')
                        // if coin_prices.coinname doesnt exits make that coin name {}
                        if (!coin_prices[coinName]) coin_prices[coinName] = {}
                        // creates a new value in the object called exchange in this case polinex and sets it equal to the last price
                        coin_prices[coinName].poloniex = data[obj].last
                    }
        }
        // return coin prices
        res(coin_prices)
        console.log(coin_prices)
            } catch (err) {
        console.log(err)
                rej(err)
            }
    })
  }

}

const bittrex = {
  marketName: 'bittrex',
  URL: 'https://bittrex.com/api/v1.1/public/getmarketsummaries',
  toBTCURL: false,
  pairURL: '',
  last: function (data) { // Where to find the last price of coin in JSON data
    return new Promise(function (res, rej) {
      try {
        for (let obj of data.result) {
          if (obj['MarketName'].includes('BTC-')) {
            let coinName = obj['MarketName'].replace('BTC-', '')
                        if (!coin_prices[coinName]) coin_prices[coinName] = {}
                        coin_prices[coinName].bittrex = obj.Last
                    }
        }
        res(coin_prices)
            } catch (err) {
        console.log(err)
                rej(err)
            }
    })
  }

}


  module.exports = function getPoloniexData (options=poloniex) {
    return new Promise ( (resolve, reject) => {
      request
        .get(options.URL)
          .then((res) => {
            let data = res.body
            console.log('Success', options.marketName, data)
            if (options.marketName) {
              options.last(data, options.toBTCURL)
              .then((newCoinPrices) => {
                numberOfRequests++
                resolve(newCoinPrices)
                // if (numberOfRequests >= 1) computePrices(coin_prices)
              })
            } else {
              resolve(coin_prices)
            }
          })
    })
  }