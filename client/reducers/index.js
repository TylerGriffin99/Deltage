import {combineReducers} from 'redux'

import bestTrade from './best-trade'
import exchangeTable from './exchange-table'

export default combineReducers({
  bestTrade,
  exchangeTable
})
