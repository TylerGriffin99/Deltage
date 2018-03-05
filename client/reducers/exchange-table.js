import {RECEIVE_DATA} from '../actions/index'
import {FILTER_TOP_DATA} from '../actions/filterMainTopFive'

const initialState = {
  data: [],
  filters: ['bittrex', 'kraken']
}
function getAllExchanges (coinType, filters) {
  return coinType.allExchanges.filter((exchange) => filters.includes(exchange.name))
}

function getFilteredDiff (coinType, filters) {
  const exchanges = getAllExchanges(coinType, filters)
  const diff = (exchanges[0].lastPrice - exchanges[exchanges.length - 1].lastPrice) / exchanges[0].lastPrice * 100
  return diff
}

const exchangeTable = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVE_DATA): {
      return {
        data: action.data.map((coinType) => {
          return {
            ...coinType,
            allExchanges: getAllExchanges(coinType, state.filters),
            filteredDiff: getFilteredDiff(coinType, state.filters)
          }
        }),
        filters: state.filters
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
