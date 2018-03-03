import {RECEIVE_DATA} from '../actions'

const initialState = {}

const receivedData = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVE_DATA): {
      return {
        receivedData: true
      }
    }
    default:
      return state
  }
}

export default receivedData
