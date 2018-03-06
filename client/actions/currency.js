export const CHANGE_DOL = 'CHANGE_DOL'
export const RECEIVED_RATES = 'RECEIVED_RATES'

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
