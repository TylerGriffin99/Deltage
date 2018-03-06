import {RECEIVED_GRAPH} from '../actions/index'

const initialState = false

const receivedGraph = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVED_GRAPH): {
      return true
    }
    default:
      return state
  }
}

export default receivedGraph
