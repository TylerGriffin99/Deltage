import request from '../utils/api'
import {saveUserToken} from '../utils/auth'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin () {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenicated: false
  }
}

function receiveLogin () {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenicated: true
  }
}

function loginError () {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenicated: false
  }
}

// thunk function which dispatches the actions which authenicate
// gets the token for the User
export function loginUser (creds, onSuccess) {
  return dispatch => {
    dispatch(requestLogin(creds))
    // api request to signin route where creds are checked
    return request('post', '/signin', creds)
      .then((response) => {
        if (!response.ok) {
          // runs error dispatches
          dispatch(loginError(response.body.message))
          return Promise.reject(response.body.message)
        } else {
          // sets a token within the user's local storage
          const userInfo = saveUserToken(response.body.token)
          dispatch(receiveLogin(userInfo))
          onSuccess()
        }
      }).catch(err => dispatch(loginError(err.response.body.message)))
  }
}
