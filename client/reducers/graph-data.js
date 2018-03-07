import {RECEIVED_GRAPH} from '../actions'
import {CONVERT_GRAPH} from '../actions/currency'

const initialState = {
  graph: {},
  convertedGraph: {}
}

export function convertGraph (currencies, rates, exchangeData) {
  const exchanges = exchangeData.datasets
  const convertedGraphData = {}
  const convertedDatasets = []
  for (let i = 0; i < exchanges.length; i++) {
    const convertedExchanges = {}
    // convertedExchanges.datasets.push(exchanges[i].label)
    // console.log(convertedExchanges.datasets)
    const converted = exchanges[i].data.map(currentValue => {
      return convertCurrency(currencies, rates, currentValue)
    })
    // data set is an array [{label:, data: []}, {}]
    convertedExchanges.label = exchanges[i].label
    convertedExchanges.data = converted
    convertedDatasets.push(convertedExchanges)
  }
  convertedGraphData.datasets = convertedDatasets
  console.log(convertedGraphData)
  return convertedGraphData
}

export function convertCurrency (currencies, rates, price) {
  const newCurrency = currencies[0]
  const oldCurrency = currencies[1]
  const newExchangeRate = rates[newCurrency]
  const oldExchangeRate = rates[oldCurrency]
  if (!oldCurrency) return price

  return price / oldExchangeRate * newExchangeRate
}

const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVED_GRAPH): {
      return {
        ...state,
        graph: action.data
      }
    }
    case (CONVERT_GRAPH):
    //   const newCurrency = action.data

    //     const newCurrency = this.props.dollar[0]
    //     const oldCurrency = this.props.dollar[1]
    //     const exchangesData = this.props.graph.datasets

    //     for (let i = 0; i < exchangesData.length; i++) {
    //       const backToUsd = exchangesData[i].data.map(currentValue => {
    //         return currentValue / oldExchangeRate
    //       })
    //       for (let j = 0; j < backToUsd.length; j++) {
    //         const newConvertedRate = backToUsd.map(usd => {
    //           return usd * newExchangeRate
    //         })
    //         this.props.graph.datasets[i].data = newConvertedRate
    //       }
    //     }
    //   }
    // console.log(action.data)
      return {
        ...state
      }
    // cdn 10 sec window reducer thing
    default:
      return state
  }
}

export default graphReducer
