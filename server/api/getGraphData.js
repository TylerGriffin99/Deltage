const request = require('superagent')

const graphData = require('./graphData')
const {GRAPH_DATA} = require('../../common/events')

function timeString () {
  return new Date().toLocaleTimeString('en-NZ')
}

function getData (sockets) {
  // if statement for too many dots first
  const bittrex = request
    .get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=bittrex')
    .then(res => {
      return res.body.USD
    })

  const poloniex = request
    .get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=poloniex')
    .then(res => {
      return res.body.USD
    })

  const kraken = request
    .get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=kraken')
    .then(res => {
      return res.body.USD
    })
  const bitfinex = request
    .get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=bitfinex')
    .then(res => {
      return res.body.USD
    })
  const livecoin = request
    .get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=livecoin')
    .then(res => {
      return res.body.USD
    })
  Promise.all([bittrex, poloniex, kraken, bitfinex, livecoin])
    .then((results) => {
      if (graphData.labels.length === 100) {
        for (let i = 0; i < results.length; i++) {
          graphData.datasets[i].data.shift()
          graphData.datasets[i].data.push(results[i])
        }
        graphData.labels.shift()
        graphData.labels.push(timeString())
        sockets.forEach(socket => {
          socket.emit(GRAPH_DATA, graphData)
        })
      } else {
        for (let i = 0; i < results.length; i++) {
          graphData.datasets[i].data.push(results[i])
        }
        graphData.labels.push(timeString())
        sockets.forEach(socket => {
          socket.emit(GRAPH_DATA, graphData)
        })
      }
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      return console.error(err.message)
    })
}

module.exports = {
  getData
}
