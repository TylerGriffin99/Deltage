import {LOGIN_SUCCESS} from '../../../client/actions/login'
import {LOGOUT_SUCCESS} from '../../../client/actions/logout'
import {TOKEN_SUCCESS} from '../../../client/actions/checkToken'

test('userDetails returns user details during RECEIVE_USER_DETAILS', () => {
    const initialState = false
    const action = {
      type: RECEIVE_USER_DETAILS,
      userDetails: {name: 'test name'}
    }
    const newState = userDetails(currentState, action)
    expect(newState).toBe(action.userDetails)
  })
  