/* global test expect */

const livecoin = require('../../server/api/markets/livecoin')

test('test that retrieveLastCur gets  BTC from USD/BTC symbol', () => {
  const expected = 'BTC'
  const actual = livecoin.retrieveLastCur('USD/BTC')
  expect(actual).toBe(expected)
})

test('test that retrieveLastCur gets  ETH from BTC/ETH symbol', () => {
  const expected = 'ETH'
  const actual = livecoin.retrieveLastCur('BTC/ETH')
  expect(actual).toBe(expected)
})

test('Process livecoin with an empty coin data array', () => {
  const apiData = [{'cur': 'BNT', 'symbol': 'BNT/BTC', 'last': 0.00042111, 'high': 0.00044671, 'low': 0.00042111, 'volume': 7.11929440, 'vwap': 0.00044037, 'max_bid': 0.00044671, 'min_ask': 0.0004467, 'best_bid': 0.00042111, 'best_ask': 0.0004467}]
  const coinData = []
  livecoin.processLiveCoin(apiData, coinData)
  const actual = coinData
  const expected = [{
    coin: 'BNT',
    exchanges: [{
      name: 'livecoin',
      lastPrice: 0.00042111,
      highestBid: 0.00042111,
      lowestAsk: 0.0004467,
      volume: 7.11929440
    }]
  }]

  expect(actual).toEqual(expected)
})

test('Process live with an full coin data array', () => {
  const apiData = [{'cur': 'BNT', 'symbol': 'BNT/BTC', 'last': 0.00042111, 'high': 0.00044671, 'low': 0.00042111, 'volume': 7.11929440, 'vwap': 0.00044037, 'max_bid': 0.00044671, 'min_ask': 0.0004467, 'best_bid': 0.00042111, 'best_ask': 0.0004467}]
  const coinData = [{
    coin: 'BNT',
    exchanges: [{
      name: 'poloneix',
      lastPrice: 11600,
      highestBid: 11599,
      lowestAsk: 11600,
      volume: 29666.64808884
    }, {
      name: 'bitfinex',
      lastPrice: 11600,
      highestBid: 11599,
      lowestAsk: 11600,
      volume: 29666.64808884
    }]
  }]
  livecoin.processLiveCoin(apiData, coinData)
  const actual = coinData
  const expected = [{
    coin: 'BNT',
    exchanges: [{
      name: 'poloneix',
      lastPrice: 11600,
      highestBid: 11599,
      lowestAsk: 11600,
      volume: 29666.64808884
    }, {
      name: 'bitfinex',
      lastPrice: 11600,
      highestBid: 11599,
      lowestAsk: 11600,
      volume: 29666.64808884
    },
    {
      name: 'livecoin',
      lastPrice: 0.00042111,
      highestBid: 0.00042111,
      lowestAsk: 0.0004467,
      volume: 7.11929440
    }]
  }]

  expect(actual).toEqual(expected)
})

test('Do not process livecoin with an 0 value for last price', () => {
  const apiData = [{'cur': 'BNT', 'symbol': 'BNT/BTC', 'last': 0, 'high': 0.00044671, 'low': 0.00042111, 'volume': 7.11929440, 'vwap': 0.00044037, 'max_bid': 0.00044671, 'min_ask': 0.0004467, 'best_bid': 0.00042111, 'best_ask': 0.0004467}]
  const coinData = []
  livecoin.processLiveCoin(apiData, coinData)
  const actual = coinData
  const expected = []

  expect(actual).toEqual(expected)
})
