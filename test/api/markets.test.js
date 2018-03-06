/* global test expect */

const bitfinex = require('../../server/api/markets/bitfinex')

test('test string gets the chop', () => {
  const expected = 'BTCUSD'
  const actual = bitfinex.chop('tBTCUSD')

  expect(actual).toBe(expected)
})

test('test empty string to return empty string', () => {
  const expected = ''
  const actual = bitfinex.chop('')

  expect(actual).toBe(expected)
})

test('test single letter string to return empty string', () => {
  const expected = ''
  const actual = bitfinex.chop('t')

  expect(actual).toBe(expected)
})

test('remove BTC from string', () => {
  const coinPairs = ['tBTCUSD', 'tNZDBTC', 'tETHBTC', 'tBTCETH', 'tBTCNZD', 'tUSDBTC']
  const expected = ['USD', 'NZD', 'ETH', 'ETH', 'NZD', 'USD']
  const actual = coinPairs.map(coinPair => {
    return bitfinex.removeBTC(coinPair)
  })
  expect(actual).toEqual(expected)
})

test('Process bitfinex with an empty coin data array', () => {
  const apiData = [['tBTCUSD', 11599, 75.70803236, 11600, 264.478915, 438, 0.0392, 11600, 29666.64808884, 11623, 11050]]
  const coinData = []
  bitfinex.processBitfinex(apiData, coinData)
  const actual = coinData
  const expected = [{
    coin: 'USD',
    exchanges: [{
      name: 'bitfinex',
      lastPrice: 11600,
      highestBid: 11599,
      lowestAsk: 11600,
      volume: 29666.64808884
    }]
  }]

  expect(actual).toEqual(expected)
})

test('Process bitfinex with an full coin data array', () => {
  const apiData = [['tBTCUSD', 11599, 75.70803236, 11600, 264.478915, 438, 0.0392, 11600, 29666.64808884, 11623, 11050]]
  const coinData = [{
    coin: 'USD',
    exchanges: [{
      name: 'poloneix',
      lastPrice: 11600,
      highestBid: 11599,
      lowestAsk: 11600,
      volume: 29666.64808884
    }]
  }]
  bitfinex.processBitfinex(apiData, coinData)
  const actual = coinData
  const expected = [{
    coin: 'USD',
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

  expect(actual).toEqual(expected)
})
