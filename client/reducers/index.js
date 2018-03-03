import {combineReducers} from 'redux'

import bestTrade from './best-trade'
import exchangeTable from './exchange-table'
import receivedData from './received-data'

export default combineReducers({
  bestTrade,
  exchangeTable,
  receivedData
})
