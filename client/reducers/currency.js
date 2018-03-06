import {CHANGE_DOL} from '../actions/currency'

initialState = {
  dollar: 'USD'
}

export default currency = (initialState = state, action) => {
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
