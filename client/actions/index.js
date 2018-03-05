export const RECEIVE_DATA = 'RECEIVE_DATA'
export const RECEIVED_GRAPH = 'RECEIVED_GRAPH'

export const coinData = (data) => {
  return {
    type: RECEIVE_DATA,
    data
  }
}

export const graphData = (data) => {
  return {
    type: RECEIVED_GRAPH,
    data
  }
}
