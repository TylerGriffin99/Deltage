const path = require('path')
const express = require('express')
const server = express()
const app = require('http').Server(server)
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')

const io = require('socket.io')(app)

const socketManager = require('./socketManager')

io.on('connection',  socketManager)


server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

//routes
server.use('/api/v1/', authRoutes)
//wildcard
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app
