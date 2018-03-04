const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')
const {CONNECT} = require('../common/events')
const socketManager = require('./socketManager')

const server = express()
const app = require('http').Server(server)
const io = require('socket.io')(app)

// set up socket connection
io.on(CONNECT, socketManager)

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

// routes
server.use('/api/v1/', authRoutes)
// wildcard
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app
