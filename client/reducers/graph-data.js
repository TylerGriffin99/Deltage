import {RECEIVED_GRAPH} from '../actions'

const initialState = {}

const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVED_GRAPH): {
      return {
        graph: action.data
      }
    }
    default:
      return state
  }
}

export default graphReducer
