/* eslint-disable no-console */
require('dotenv').config()

const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('Listening on port', port)
})
