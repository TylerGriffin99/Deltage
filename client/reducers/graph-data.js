import {RECEIVED_GRAPH} from '../actions'
import {CONVERT_GRAPH} from '../actions/currency'
import {LOGOUT_SUCCESS} from '../actions/logout'

const initialState = {
  graph: {},
  convertedGraph: {},
  useConverted: false
}

export function convertGraph (currencies, rates, exchangeData, overrideRate) {
  // use spread operator to not overwrite all the data
  const convertedGraphData = {
    ...exchangeData,
    datasets: exchangeData.datasets.map(exchange => {
      return {
        ...exchange,
        data: exchange.data.map(currentValue => {
          return convertCurrency(currencies, rates, currentValue, overrideRate)
        })
      }
    })
  }

  return convertedGraphData
}

export function convertCurrency (currencies, rates, price, overrideRate) {
  rates['USD'] = 1
  const newCurrency = currencies[0]
  const oldCurrency = currencies[1]
  const newExchangeRate = rates[newCurrency]
  const oldExchangeRate = overrideRate || rates[oldCurrency]
  if (!oldExchangeRate) return price
  return price / oldExchangeRate * newExchangeRate
}

const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVED_GRAPH): {
      // exchange rates are USD based, so is data from server
      const newData = convertGraph(action.currencies, action.rates, action.data, 1)
      return {
        ...state,
        graph: newData
      }
    }
    // convert value based on difference in exchange rates
    case (CONVERT_GRAPH): {
      const newData = convertGraph(action.currencies, action.rates, state.graph)
      return {
        ...state,
        graph: newData
      }
    }
    case (LOGOUT_SUCCESS): {
      // back to USD
      const newData = convertGraph(['USD', ''], action.rates, action.data, 1)
      console.log(newData)
      return {
        ...state,
        graph: ''
      }
    }
    default:
      return state
  }
}

export default graphReducer
