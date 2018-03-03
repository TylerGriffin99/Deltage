export const RECEIVE_DATA = 'RECEIVE_DATA'

export const coinData = (data) => {
  return {
    type: RECEIVE_DATA,
    data
  }
}
