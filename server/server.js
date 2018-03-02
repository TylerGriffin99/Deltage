const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')

const getMarketData = require('./api/getMarketData')
const markets = require('./api/markets')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

//routes
server.use('/api/v1/', authRoutes)
//wildcard
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

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