const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')

const getPolinexData = require('./api/getMarketData')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

//routes
server.use('/api/v1/', authRoutes)
//wildcard
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// function callMarkets (markets) {
//   for (i =0; i<markets.length; i++) {
//     getPoloniexData(market[i])
//   }
// }
getPolinexData()
  .then((res) => {
    console.log(res)
  })

module.exports = server