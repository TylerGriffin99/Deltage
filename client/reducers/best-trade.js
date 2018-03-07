import {RECEIVE_DATA} from '../actions/index'

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

const bestTrade = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVE_DATA): {
      console.log(action.data[0])
      return action.data[0]
    }
    default:
      return state
  }
}

export default bestTrade
