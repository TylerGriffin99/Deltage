import {TOKEN_SUCCESS} from '../actions/checkToken'

const initialState = false

const showLive = (state = initialState, action) => {
  switch (action.type) {
    case (TOKEN_SUCCESS): {
      return true
    }
    default:
      return state
  }
}

export default showLive
