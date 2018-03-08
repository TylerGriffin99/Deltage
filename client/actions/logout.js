import {removeUser} from '../utils/auth'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

function requestLogout () {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,

  }
}

function receiveLogout (graphData) {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
    data: graphData
  }
}

// Logs the user out
export function logoutUser (redir, graphData) {
  return dispatch => {
    dispatch(requestLogout())
    removeUser()
    dispatch(receiveLogout(graphData))
    redir()
  }
}
