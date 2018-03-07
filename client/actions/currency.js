export const CHANGE_DOL = 'CHANGE_DOL'
export const RECEIVED_RATES = 'RECEIVED_RATES'
export const CONVERT_GRAPH = 'CONVER_GRAPH'

// export const changeCurrency = (currency) => {
//   // console.log('action', currencyPair)
export const changeCurrency = (currency) => {
  return {
    type: CHANGE_DOL,
    currency
  }
}

export const sendRates = (rates) => {
  return {
    type: RECEIVED_RATES,
    rates
  }
}

export const changeGraph = (currencies, rates) => {
  return {
    type: CONVERT_GRAPH,
    currencies,
    rates
  }
}

export const changeGraphCurrency = (currency) => {
  return (dispatch) => {
    dispatch(changeCurrency(currency))
    return Promise.resolve()
  }
}
