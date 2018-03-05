const request = require('superagent')

const graphData = require('./graphData')

function timeString () {
  return new Date().toLocaleTimeString()
}
const labels = []
const dataBittrex = []
function getData (socket) {
  //if statement for too many dots first
  request
    .get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=bittrex')
    .then(res => {
      let bittrex = res.body.USD
      dataBittrex.push(bittrex)
      labels.push(timeString())
      graphData.labels = labels
      graphData.datasets[0].data = dataBittrex
      console.log(graphData)
      return socket.emit('graph_coin', graphData)
      // this.setState({
      //   graphData
      // })
      // axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=poloniex')
      //   .then(res => {
      //     let poloniex = res.data
      //     graphData.datasets[1].data = [graphData.datasets[1].data, poloniex.USD]
      //     // this.setState({
      //     //   graphData
      //     // })
      //     axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=kraken')
      //       .then(res => {
      //         let kraken = res.data
      //         graphData.datasets[2].data = [graphData.datasets[2].data, kraken.USD]
      //         return graphData
      //       })
      //   })
    })
    .catch(err => {
      return console.log(err.message)
    })
}

module.exports = {
  getData
}
