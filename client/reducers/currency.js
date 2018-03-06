import {CHANGE_DOL} from '../actions/currency'

const initialState = {
  dollar: 'USD'
}

export default function currency (state = initialState, action) {
  switch (action.type) {
    case (CHANGE_DOL): {
      return {
        dollar: action.currency
      }
    }
    default:
      return state
  }
}
