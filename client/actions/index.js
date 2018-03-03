export const RECEIVE_DATA = 'RECEIVE_DATA'

export const coinData = (data) => {
  console.log(data)
  return {
    type: RECEIVE_DATA,
    data
  }
}
