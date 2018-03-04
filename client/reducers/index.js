import {combineReducers} from 'redux'

import auth from './auth'
import showLive from './showLive'
import bestTrade from './best-trade'
import allExchanges from './all-exchanges'
import receivedData from './received-data'
import exchangeTable from './exchange-table'

export default combineReducers({
  auth,
  showLive,
  bestTrade,
  receivedData,
  allExchanges,
  exchangeTable
})
