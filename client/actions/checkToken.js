export const TOKEN_SUCCESS = 'TOKEN_SUCCESS'
export const TOKEN_FAILURE = 'TOKEN_FAILURE'

export function confirmToken () {
  return {
    type: TOKEN_SUCCESS
  }
}

export function noToken () {
  return {
    type: TOKEN_FAILURE
  }
}
