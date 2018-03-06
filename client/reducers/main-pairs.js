import {RECEIVE_DATA} from '../actions/index'

const initialState = []
let mainCoins = []
let arrangedCoins = []
let sortedCoins = []
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
        return coin.coin === 'PAY' || coin.coin === 'RTXP' || coin.coin === 'ETH' || coin.coin === 'BCC' || coin.coin === '‎ADA' || coin.coin === 'LTC' || coin.coin === 'NEO' || coin.coin === 'DASH' || coin.coin === 'XMR'
      })
      arrangedCoins = mainCoins.map(coin => {
        return {
          coin: coin.coin,
          bittrex: coin.allExchanges.find(exch => exch.name === 'bittrex') || notAvailable,
          poloniex: coin.allExchanges.find(exch => exch.name === 'poloniex') || notAvailable,
          kraken: coin.allExchanges.find(exch => exch.name === 'kraken') || notAvailable,
          bitfinex: coin.allExchanges.find(exch => exch.name === 'bitfinex') || notAvailable,
          livecoin: coin.allExchanges.find(exch => exch.name === 'livecoin') || notAvailable
        }
      })
      sortedCoins = arrangedCoins.sort((a, b) => {
        if (a.coin < b.coin) return -1
        if (a.coin > b.coin) return 1
        return 0
      })
      return sortedCoins
    }
    default:
      return state
  }
}

export default mainPairs
