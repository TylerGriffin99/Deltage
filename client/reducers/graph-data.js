import {RECEIVED_GRAPH} from '../actions'
import {CONVERT_GRAPH} from '../actions/currency'

const initialState = {
  graph: {},
  convertedGraph: {},
  useConverted: false
}

export function convertGraph (currencies, rates, exchangeData, overrideRate) {
  // const exchanges = exchangeData.datasets
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

  // const convertedDatasets = []

  //   convertedExchanges.label = exchanges[i].label
  //   convertedExchanges.data = converted
  //   convertedDatasets.push(convertedExchanges)
  // }
  // convertedGraphData.datasets = convertedDatasets
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
      const newData = convertGraph(action.currencies, action.rates, action.data, 1)
      console.log(action.currencies)
      return {
        ...state,
        graph: newData
      }
    }
    case (CONVERT_GRAPH): {
      const newData = convertGraph(action.currencies, action.rates, state.graph)
      console.log(newData)
      console.log(action.currencies)
      console.log(action.rates)
      return {
        ...state,
        graph: newData
      }
    }
    // cdn 10 sec window reducer thing
    default:
      return state
  }
}

export default graphReducer
