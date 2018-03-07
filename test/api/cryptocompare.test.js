const getData = require('../../server/api/getGraphData')
const testGraphData = {
  labels: [],
  datasets: [{
    label: 'BitTrex',
    color: 'red',
    data: []
  },
  {
    label: 'Poloniex',
    color: 'blue',
    data: []
  },
  {
    label: 'Kraken',
    color: 'black',
    data: []
  }]
}
test('getData uses Promises', () => {
  return getData(sockets, 'data')
  const expected = {}
})
