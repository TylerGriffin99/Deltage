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

function receiveLogout (graphData, rates) {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
    data: graphData,
    rates
  }
}

// Logs the user out
export function logoutUser (redir, graphData, rates) {
  console.log(redir)
  console.log(graphData)
  return dispatch => {
    dispatch(requestLogout())
    removeUser()
    
    console.log(rates)
    dispatch(receiveLogout(graphData, rates))
    redir()
  }
}
