import {RECEIVE_DATA} from '../actions/index'

const initialState = {}

const receivedData = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVE_DATA): {
      return true
    }
    default:
      return state
  }
}

export default receivedData
