import {CHANGE_DOL, RECEIVED_RATES} from '../actions/currency'

const initialState = {
  dollar: 'USD'
}

export default function currency (state = initialState, action) {
  switch (action.type) {
    case (CHANGE_DOL): {
      return {
        ...state,
        dollar: action.currency
      }
    }
    case (RECEIVED_RATES): {
      return {
        ...state,
        rates: action.rates
      }
    }
    default:
      return state
  }
}
