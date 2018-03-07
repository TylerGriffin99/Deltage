import {RECEIVE_DATA} from '../actions/index'
import {FILTER_TOP_DATA} from '../actions/filterMainTopFive'

const initialState = {
  data: [],
  sortedData: [],
  filters: ['bittrex', 'poloniex', 'kraken', 'livecoin', 'bitfinex']
}

function getAllExchanges (coinType, filters) {
  const filtered = coinType.allExchanges.filter((exchange) => filters.includes(exchange.name))
  return filters.length > 1 ? filtered : []
}

function getFilteredDiff (coinType, filters) {
  if (!filters.length) return 0
  const exchanges = getAllExchanges(coinType, filters)
  if (exchanges.length) {
    const diff = (exchanges[0].lastPrice - exchanges[exchanges.length - 1].lastPrice) / exchanges[0].lastPrice * 100
    return diff
  } else {
    return 0
  }
}

function getCoinData (state, action) {
  const allCoinData = action.data.map((coinType) => {
    return {
      ...coinType,
      allExchanges: getAllExchanges(coinType, state.filters),
      filteredDiff: getFilteredDiff(coinType, state.filters)
    }
  })
  return allCoinData.sort((a, b) => {
    return b.filteredDiff - a.filteredDiff
  })
}

const exchangeTable = (state = initialState, action) => {

  switch (action.type) {
    case (FILTER_TOP_DATA): {
      console.log('filter red', action.topTrades)
      return {
        filters: action.filters,
        data: state.data,
        sortedData: getCoinData({filters: action.filters}, {data: state.data}).slice(0, action.topTrades)
      }
    }
    case (RECEIVE_DATA): {
      console.log('receive exchnage red', action.topTrades)
      return {
        filters: state.filters,
        data: action.data,
        sortedData: getCoinData(state, action).slice(0, action.topTrades)
      }
    }
    default:
      return state
  }
}

export default exchangeTable
