import {RECEIVE_DATA} from '../actions/index'

const initialState = {}
let mainCoins = {}
const notAvailable = {
  volume: 'Not Available',
  lastPrice: 'Not Available',
  highestBid: 'Not Available',
  lowestAsk: 'Not Available'
}

const mainPairs = (state = initialState, action) => {
  switch (action.type) {
    case (RECEIVE_DATA): {
      mainCoins = action.data.filter(coin => {
        return coin.coin === 'PAY' || coin.coin === 'EOS' || coin.coin === 'ETH' || coin.coin === 'XVC' || coin.coin === 'VRC'
      })
      return mainCoins.map(coin => {
        return {
          coin: coin.coin,
          bittrex: coin.allExchanges.find(exch => exch.name === 'bittrex') || notAvailable,
          poloniex: coin.allExchanges.find(exch => exch.name === 'poloniex') || notAvailable,
          kraken: coin.allExchanges.find(exch => exch.name === 'kraken') || notAvailable
        }
      })
    }
    default:
      return state
  }
}

export default mainPairs
