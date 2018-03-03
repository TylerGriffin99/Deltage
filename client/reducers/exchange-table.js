import {RECEIVE_DATA} from '../actions'

const initialState = ''

const exchangeTable = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVE_DATA): {
      return {
        row1: action.data[0],
        row2: action.data[1],
        row3: action.data[2],
        row4: action.data[3],
        row5: action.data[4]
      }
    }
    default:
      return state
  }
}

export default exchangeTable
