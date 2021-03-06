// import {RECEIVED_GRAPH} from '../../../client/actions'

import {convertGraph, convertCurrency} from '../../../client/reducers/graph-data'
const graphData = {
  datasets: [
    {
      label: 'BitTrex',
      color: 'red',
      data: [2, 2, 4]
    },
    {
      label: 'Poloniex',
      color: 'black',
      data: [2, 4, 12]
    },
    {
      label: 'Kraken',
      border: 'bold',
      data: [2, 2, 2]
    },
    {
      label: 'Bitfinex',
      border: 'thin',
      data: [10, 10, 10]
    }
  ]
}

test('convertGraph converts data', () => {
  const currencies = ['USD', 'NZD']
  const exchangeData = {...graphData}
  const rates = {USD: 1, NZD: 2}
  const expected = {
    datasets: [
      {label: 'BitTrex',
        color: 'red',
        data: [1, 1, 2]
      },
      {
        label: 'Poloniex',
        color: 'black',
        data: [1, 2, 6]
      },
      {
        label: 'Kraken',
        border: 'bold',
        data: [1, 1, 1]
      },
      {
        label: 'Bitfinex',
        border: 'thin',
        data: [5, 5, 5]
      }
    ]
  }
  const actual = convertGraph(currencies, rates, exchangeData)
  expect(actual).toEqual(expected)
})

test('convertCurrency converts currencies', () => {
  const currencies = ['USD', 'NZD']
  const rates = {USD: 1, NZD: 2}
  const price = 5
  const expected = 5 / 2
  const actual = convertCurrency(currencies, rates, price)
  expect(actual).toBe(expected)
})

test('convertCurrency converts currencies', () => {
  const currencies = ['USD', '']
  const rates = {USD: 1, NZD: 2}
  const price = 5
  const expected = 5
  const actual = convertCurrency(currencies, rates, price)
  expect(actual).toBe(expected)
})

test('convertCurrency converts currencies', () => {
  const currencies = ['CAD', 'NZD']
  const rates = {USD: 1, NZD: 2, CAD: 4}
  const price = 5
  const expected = 10
  const actual = convertCurrency(currencies, rates, price)
  expect(actual).toBe(expected)
})

test('convertCurrency converts currencies', () => {
  const currencies = ['CAD', 'USD']
  const rates = {NZD: 2, CAD: 4}
  const price = 5
  const expected = 20
  const actual = convertCurrency(currencies, rates, price)
  expect(actual).toBe(expected)
})

test('convertCurrency converts  from server', () => {
  const currencies = ['CAD', 'NZD']
  const rates = {NZD: 2, CAD: 4}
  const price = 5
  const expected = 20
  const actual = convertCurrency(currencies, rates, price, 1)
  expect(actual).toBe(expected)
})
