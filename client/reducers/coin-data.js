import {RECEIVE_DATA} from '../actions'

const initialState = ''

const coinData = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVE_DATA): {
      return {
        data: action.data
      }
    }
    default:
      return state
  }
}

export default coinData
