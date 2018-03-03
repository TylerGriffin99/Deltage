import request from '../utils/api'
import {receiveLogin} from './login'
import {saveUserToken} from '../utils/auth'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

function requestRegister (creds) {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

export function registerError (message) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function registerUser (creds) {
  return dispatch => {
    // set off register request
    dispatch(requestRegister(creds))
    // call api
    return request('post', '/register', creds)
      .then((response) => {
        if (!response.ok) {
          // handle error
          dispatch(registerError(response.body.message))
          return Promise.reject(response.body.message)
        } else {
          // set the token in local storage
          const userInfo = saveUserToken(response.body.token)
          // Dispatch the success action
          dispatch(receiveLogin(userInfo))
        }
      }).catch(err => {
        dispatch(registerError(err.response.body.message))
      })
  }
}
