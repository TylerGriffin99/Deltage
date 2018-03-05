import {combineReducers} from 'redux'
import io from 'socket.io-client'
import baseUrl from '../lib/base-url'
import auth from './auth'
import showLive from './showLive'
import bestTrade from './best-trade'
import mainPairs from './main-pairs'
import graphData from './graph-data'
import receivedData from './received-data'
import exchangeTable from './exchange-table'

const socket = io(baseUrl)

export default combineReducers({
  auth,
  showLive,
  bestTrade,
  mainPairs,
  graphData,
  receivedData,
  exchangeTable,
  socket: state => socket
})
