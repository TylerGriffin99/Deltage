import {TOKEN_FAILURE} from '../actions/checkToken'

const initialState = ''

export default function errorMessage (state = initialState, action) {
  switch (action.type) {
    case TOKEN_FAILURE:
      return 'Not Logged In'
    default:
      return state
  }
}
