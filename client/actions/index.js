import socket from '../lib/socket'
import {COIN_DATA, GRAPH_DATA} from '../../common/events'

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const RECEIVED_GRAPH = 'RECEIVED_GRAPH'

export const coinData = (data, topTrades) => {
  console.log(topTrades)
  return {
    type: RECEIVE_DATA,
    data,
    topTrades: topTrades || 5
  }
}

export const graphData = (data, currencies, rates) => {
  return {
    type: RECEIVED_GRAPH,
    data,
    currencies,
    rates
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
  return (dispatch, getState) => {
    socket.on(GRAPH_DATA, (data) => {
      const state = getState()
      dispatch(graphData(data, state.currency.dollar, state.currency.rates))
    })
  }
}
