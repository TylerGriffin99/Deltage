const moment = require('moment')

const btcData = [
  {
    coin: 'pay',
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 0.01044109,
        highestBid: 0.01044109,
        lowestAsk: 0.01044109,
        volume: 585302212.647
      },
      {
        name: 'polinex',
        lastPrice: 0.00094002,
        highestBid: 0.00094002,
        lowestAsk: 0.00094002,
        volume: 585302212.647
      },
      {
        name: 'jubi',
        lastPrice: 0.0009,
        highestBid: 0.0009,
        lowestAsk: 0.0009,
        volume: 585302212.647
      }
    ]
  },
  {
    coin: 'eos',
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 0.00004624,
        highestBid: 0.00004624,
        lowestAsk: 0.00004624,
        volume: 585302212.647
      },
      {
        name: 'polinex',
        lastPrice: 0.00004385,
        highestBid: 0.00004385,
        lowestAsk: 0.00004385,
        volume: 585302212.647
      },
      {
        name: 'jubi',
        lastPrice: 0.00004565,
        highestBid: 0.00004565,
        lowestAsk: 0.00004565,
        volume: 585302212.647
      }
    ]
  },
  {
    coin: 'great',
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 0.01044109,
        highestBid: 0.01044109,
        lowestAsk: 0.01044109,
        volume: 585302212.647
      },
      {
        name: 'polinex',
        lastPrice: 0.01094002,
        highestBid: 0.01094002,
        lowestAsk: 0.01094002,
        volume: 585302212.647
      },
      {
        name: 'jubi',
        lastPrice: 0.0019,
        highestBid: 0.0019,
        lowestAsk: 0.0019,
        volume: 585302212.647
      }
    ]
  },
  {
    coin: 'doge',
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 550,
        highestBid: 550,
        lowestAsk: 550,
        volume: 585302212.647
      }
    ]
  },
  {
    coin: 'fun',
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 0.00204624,
        highestBid: 0.00204624,
        lowestAsk: 0.00204624,
        volume: 585302212.647
      },
      {
        name: 'polinex',
        lastPrice: 0.00104385,
        highestBid: 0.00104385,
        lowestAsk: 0.00104385,
        volume: 585302212.647
      },
      {
        name: 'jubi',
        lastPrice: 0.00204565,
        highestBid: 0.00204565,
        lowestAsk: 0.00204565,
        volume: 585302212.647
      }
    ]
  },
  {
    coin: 'woohoo',
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 0.10204624,
        highestBid: 0.10204624,
        lowestAsk: 0.10204624,
        volume: 585302212.647
      },
      {
        name: 'polinex',
        lastPrice: 0.30104385,
        highestBid: 0.30104385,
        lowestAsk: 0.30104385,
        volume: 585302212.647
      },
      {
        name: 'jubi',
        lastPrice: 0.20204565,
        highestBid: 0.20204565,
        lowestAsk: 0.20204565,
        volume: 585302212.647
      }
    ]
  }
]

function sort (data) {
  const validPairs = data.filter(coinData => { return coinData.exchanges.length > 1 })

  const allPairs = validPairs.map(coinData => {
    const sortedCoin = {
      coin: coinData.coin,
      timestamp: moment()
    }
    const sortedExch = coinData.exchanges.sort((a, b) => {
      return b.lastPrice - a.lastPrice
    })
    const high = sortedExch[0]
    const low = sortedExch[sortedExch.length - 1]
    sortedCoin.buy = low
    sortedCoin.sell = high
    sortedCoin.diff = (high.lastPrice - low.lastPrice) / high.lastPrice * 100

    return sortedCoin
  })
  const sortedPairs = allPairs.sort((a, b) => {
    return b.diff - a.diff
  })

  if (sortedPairs.length > 4) {
    const topFive = [sortedPairs[0], sortedPairs[1], sortedPairs[2], sortedPairs[3], sortedPairs[4]]
    console.log('this is top five')
    console.log(topFive)
    return topFive
  } else {
    console.log('this is sorted pairs:')
    console.log(sortedPairs)
    return sortedPairs
  }
}

sort(btcData)
