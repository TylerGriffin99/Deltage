import socket from '../lib/socket'
import {COIN_DATA, GRAPH_DATA} from '../../common/events'

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

export const getCoinData = () => {
  return (dispatch) => {
    socket.on(COIN_DATA, (data) => {
      dispatch(coinData(data))
    })
  }
}
export const getGraphData = () => {
  return (dispatch) => {
    socket.on(GRAPH_DATA, (data) => {
      dispatch(graphData(data))
    })
  }
}
