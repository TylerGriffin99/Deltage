import {RECEIVE_DATA} from '../actions/index'
import {FILTER_TOP_DATA} from '../actions/filterMainTopFive'

const initialState = {
  data: [],
  filters: ['bittrex', 'kraken']
}

const exchangeTable = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVE_DATA): {
      return {
        data: action.data.map((coinType) => {
          return {
            ...coinType,
            allExchanges: coinType.allExchanges.filter((exchange) => state.filters.includes(exchange.name))
          }
        }),
        filters: state.filters
        // [0],
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
