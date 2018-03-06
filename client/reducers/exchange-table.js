import {RECEIVE_DATA} from '../actions/index'
import {FILTER_TOP_DATA} from '../actions/filterMainTopFive'

const initialState = {
  data: [],
  filters: ['poloniex', 'kraken']
}

function getAllExchanges (coinType, filters) {
  const filtered = coinType.allExchanges.filter((exchange) => filters.includes(exchange.name))
  // const validPairs = filtered.filter(coinData => coinData.exchanges.length > 1)
  // const allPairs = validPairs.map(coinData => {
  // const sortedCoin = {
  //     coin: coinType.coin
  //     // timestamp: moment()
  //   }
  // }
  // if (validPairs) {
  //   validPairs.sort((a, b) => {
  //     return b.lastPrice - a.lastPrice
  //   })
  // } else {
  //   return
  // }

  return filters.length > 1 ? filtered : []
}

function getFilteredDiff (coinType, filters) {
  if (!filters.length) return 0
  const exchanges = getAllExchanges(coinType, filters)
  const diff = (exchanges[0].lastPrice - exchanges[exchanges.length - 1].lastPrice) / exchanges[0].lastPrice * 100
  return diff
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
    case (RECEIVE_DATA): {
      return {
        // data: action.data.map((coinType) => {
        //   return {
        //     ...coinType,
        //     allExchanges: getAllExchanges(coinType, state.filters),
        //     filteredDiff: getFilteredDiff(coinType, state.filters)
        //   }
        // }),
        filters: state.filters,
        sortedData: getCoinData(state, action)
        // action.data[0],
        // action.data[1],
        // action.data[2],
        // action.data[3],
        // action.data[4]
      }
    }
    default:
      return state
  }
}

export default exchangeTable
