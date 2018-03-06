export const CHANGE_DOL = 'CHANGE_DOL'
export const RECEIVED_RATES = 'RECEIVED_RATES'

export const changeCurrency = (currency, exchangeRate) => {
  return {
    type: CHANGE_DOL,
    currency,
    exchangeRate
  }
}

export const sendRates = (rates) => {
  return {
    type: RECEIVED_RATES,
    rates
  }
}
