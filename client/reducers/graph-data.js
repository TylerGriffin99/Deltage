import {RECEIVED_GRAPH, CHANGE_DOL} from '../actions'

const initialState = {}

const graphReducer = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVED_GRAPH): {
      return {
        graph: action.data
      }
    }
    // case (CHANGE_DOL): {
    //   console.log(state)
    //   return {
    //     ...state
    //   }
    // }
    default:
      return state
  }
}

export default graphReducer
