const request = require('superagent')

module.exports = function getMarketData (options) {
  return request
    .get(options.URL)
    .then((res) => {
      return res.body
    })
}
