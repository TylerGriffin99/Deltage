export const CHANGE_DOL = 'CHANGE_DOL'

export const changeCurrency = (currency) => {
  return {
    type: CHANGE_DOL,
    currency
  }
}
