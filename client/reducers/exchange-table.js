import {RECEIVE_DATA} from '../actions/index'

const initialState = {}

const exchangeTable = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVE_DATA): {
      return [
        action.data[0],
        action.data[1],
        action.data[2],
        action.data[3],
        action.data[4]
      ]
    }
    default:
      return state
  }
}

export default exchangeTable
