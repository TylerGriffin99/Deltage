import {LOGIN_SUCCESS} from '../actions/login'
import {LOGOUT_SUCCESS} from '../actions/logout'
import {TOKEN_SUCCESS} from '../actions/checkToken'

const initialState = false

const showLive = (state = initialState, action) => {
  switch (action.type) {
    case (TOKEN_SUCCESS): {
      return true
    }
    case (LOGIN_SUCCESS): {
      return true
    }
    case (LOGOUT_SUCCESS): {
      return false
    }
    default:
      return state
  }
}

export default showLive
