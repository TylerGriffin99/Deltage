import {combineReducers} from 'redux'

import auth from './auth'
import showLive from './showLive'
import bestTrade from './best-trade'
import mainPairs from './main-pairs'
import receivedData from './received-data'
import exchangeTable from './exchange-table'

export default combineReducers({
  auth,
  showLive,
  bestTrade,
  mainPairs,
  receivedData,
  exchangeTable
})
