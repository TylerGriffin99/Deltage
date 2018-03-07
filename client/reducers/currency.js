import {CHANGE_DOL, RECEIVED_RATES} from '../actions/currency'

const initialState = {
  dollar: ['USD', ''],
  rates: []
}

export default function currency (state = initialState, action) {
  switch (action.type) {
    case CHANGE_DOL: {
      const currencyCompare = [...state.dollar]
      currencyCompare.unshift(action.currency)
      currencyCompare.pop()
      return {
        ...state,
        dollar: currencyCompare
      }
    }
    case RECEIVED_RATES: {
      return {
        ...state,
        rates: action.rates
      }
    }
    default:
      return state
  }
}
