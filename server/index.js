/* eslint-disable no-console */
require('dotenv').config()

const server = require('./server')
// const socket = require('socket.io')
// const socketManager = require('./socketManager')

// const io = socket(server)

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('Listening on port', port)
})

// io.on('connection',  socketManager)

// module.exports = io


