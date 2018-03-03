const path = require('path')
const express = require('express')
const server = express()
const app = require('http').Server(server)
const bodyParser = require('body-parser')
const io = require('socket.io')(app)

const authRoutes = require('./routes/auth')
const {CONNECT} = require('../common/events')
const socketManager = require('./socketManager')
const getMarketData = require('./api/getMarketData')
const markets = require('./api/markets')

// set up socket connection
io.on(CONNECT,  socketManager)

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

//routes
server.use('/api/v1/', authRoutes)
//wildcard
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app
function callMarkets () {
  for (i = 0; i<markets.length; i++) {
    getMarketData(markets[i])
    .then((res) => {
      // console.log(res)
    })
  }
}
//callMarkets(markets)
  // .then((res) => {
  //   console.log(res)
  // })

// callMarkets()
  // .then((res) => {
  //   console.log(res)
  // })
  


