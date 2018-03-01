const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')

const getMarketData = require('./api/getMarketData')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

//routes
server.use('/api/v1/', authRoutes)
//wildcard
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

const markets = [
  {
    marketName: 'poloniex',
    URL: 'https://poloniex.com/public?command=returnTicker',
    toBTCURL: false,
    pairURL: '',
  
    last: function (data, coinPriceData) { // Where to find the last price of coin in JSON data
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
                          if (!coinPriceData[coinName]) coinPriceData[coinName] = {}
                          // creates a new value in the object called exchange in this case polinex and sets it equal to the last price
                          coinPriceData[coinName].poloniex = data[obj].last
                      }
          }
          // return coin prices
          res(coinPriceData)
          console.log(coinPriceData)
              } catch (err) {
          console.log(err)
                  rej(err)
              }
      })
    }
  
  },
  {
    marketName: 'bittrex',
    URL: 'https://bittrex.com/api/v1.1/public/getmarketsummaries',
    toBTCURL: false,
    pairURL: '',
    last: function (data, coinPriceData) { // Where to find the last price of coin in JSON data
      return new Promise(function (res, rej) {
        try {
          for (let obj of data.result) {
            if (obj['MarketName'].includes('BTC-')) {
              let coinName = obj['MarketName'].replace('BTC-', '')
                          if (!coinPriceData[coinName]) coinPriceData[coinName] = {}
                          coinPriceData[coinName].bittrex = obj.Last
                      }
          }
          res(coinPriceData)
              } catch (err) {
          console.log(err)
                  rej(err)
              }
      })
    }
  
  }
  ]

function callMarkets () {
  for (i = 0; i<markets.length; i++) {
    getMarketData(markets[i])
    .then((res) => {
      console.log(res)
    })
  }
}
//callMarkets(markets)
  // .then((res) => {
  //   console.log(res)
  // })

callMarkets()
  // .then((res) => {
  //   console.log(res)
  // })
  

module.exports = server