import {LOGOUT_SUCCESS} from '../../../client/actions/logout'
import {isAuthenticated, getUserTokenInfo} from '../../../client/utils/auth'
import {REGISTER_REQUEST, REGISTER_FAILURE} from '../../../client/actions/register'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../../../client/actions/login'

import auth from '../../../client/reducers/auth'


//TODO migth need to mock a token for the tests to work.
const initialState = {
    isFetching: false,
  isAuthenticated: isAuthenticated(),
    user: getUserTokenInfo(),
    errorMessage: ''
  }

test('showLive returns True on TOKEN_SUCCESS', () => {
    const action = {
      type: LOGIN_REQUEST
    }
    const newState = showLive(initialState, action)
    expect(newState.isFetching).toBe(true)
    expect(newState.isAuthenticated).toBe(false)
    expect(newState.errorMessage).toBe('')
  })