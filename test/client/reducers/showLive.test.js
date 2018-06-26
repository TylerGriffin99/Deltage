/* global test expect */

import {LOGIN_SUCCESS} from '../../../client/actions/login'
import {LOGOUT_SUCCESS} from '../../../client/actions/logout'
import {TOKEN_SUCCESS} from '../../../client/actions/checkToken'

import showLive from '../../../client/reducers/showLive'

test('showLive returns True on TOKEN_SUCCESS', () => {
  const initialState = false
  const action = {
    type: TOKEN_SUCCESS
  }
  const newState = showLive(initialState, action)
  expect(newState).toBe(true)
})

test('showLive returns True on LOGIN_SUCCESS', () => {
  const initialState = false
  const action = {
    type: LOGIN_SUCCESS
  }
  const newState = showLive(initialState, action)
  expect(newState).toBe(true)
})

test('showLive returns True on LOGOUT_SUCCESS', () => {
  const initialState = false
  const action = {
    type: LOGOUT_SUCCESS
  }
  const newState = showLive(initialState, action)
  expect(newState).toBe(false)
})
