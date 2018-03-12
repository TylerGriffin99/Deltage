import {RECEIVED_GRAPH} from '../actions/index'
import {LOGOUT_SUCCESS} from '../actions/logout'
const initialState = false

const receivedGraph = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVED_GRAPH): {
      return true
    }
    case (LOGOUT_SUCCESS): {
      return false
    } 
    default:
      return state
  }
}

export default receivedGraph
