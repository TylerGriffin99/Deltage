const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')
const {CONNECT} = require('../common/events')
const callMarkets = require('./callMarkets')

const server = express()
const app = require('http').Server(server)
const io = require('socket.io')(app)

// set up socket connection
// io.on(CONNECT, socketManager)
const getGraphData = require('./api/getGraphData').getData
const sockets = []
io.on(CONNECT, (socket) => {
  sockets.push(socket)
})

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

// routes
server.use('/api/v1/', authRoutes)
// wildcard
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

setInterval(() => {
  if (sockets.length) {
    getGraphData(sockets)
  }
}, 10000)

setInterval(() => {
  if (sockets.length) {
    callMarkets(sockets)
  }
}, 12000)

module.exports = app
