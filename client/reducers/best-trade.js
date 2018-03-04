import {RECEIVE_DATA} from '../actions/index'

const initialState = {}

const bestTrade = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVE_DATA): {
      return {
        receivedData: true,
        bestTrade: action.data[0]
      }
    }
    default:
      return state
  }
}

export default bestTrade
