import {RECEIVE_DATA} from '../../../client/actions/index'

import bestTrade from '../../../client/reducers/best-trade'

const initialState = {
  coin: '',
  allExchanges: {},
  buy: {
    name: '',
    lastPrice: 0,
    highestBid: 0,
    lowestAsk: 0,
    volume: 0
  },
  sell: {
    name: '',
    lastPrice: 0,
    highestBid: 0,
    lowestAsk: 0,
    volume: 0
  },
  diff: 0,
  timestamp: ''
}

test('best-trade returns data Top Trad', () => {
  const data = [{
    trade: 'best trade'
  },
  {data: 'worse trade'}
  ]
  const action = {
    type: RECEIVE_DATA,
    data
  }
  const newState = bestTrade(initialState, action)
  expect(newState).toBe(action.data[0])
})
