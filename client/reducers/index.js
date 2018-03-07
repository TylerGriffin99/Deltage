import {combineReducers} from 'redux'

import auth from './auth'
import currency from './currency'
import showLive from './showLive'
import bestTrade from './best-trade'
import mainPairs from './main-pairs'
import graphData from './graph-data'
import receivedData from './received-data'
import receivedGraph from './received-graph'
import exchangeTable from './exchange-table'

export default combineReducers({
  auth,
  currency,
  showLive,
  bestTrade,
  mainPairs,
  graphData,
  receivedData,
  receivedGraph,
  exchangeTable
})
