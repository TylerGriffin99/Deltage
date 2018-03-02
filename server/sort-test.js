const btcData = [
  {
    coin: 'pay',
    timestamp: 1111,
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 0.01044109
      },
      {
        name: 'polinex',
        lastPrice: 0.00094002
      },
      {
        name: 'jubi',
        lastPrice: 0.0009
      }
    ]
  },
  {
    coin: 'eos',
    timestamp: 1111,
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 0.00004624
      },
      {
        name: 'polinex',
        lastPrice: 0.00004385
      },
      {
        name: 'jubi',
        lastPrice: 0.00004565
      }
    ]
  },
  {
    coin: 'great',
    timestamp: 1111,
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 0.01044109
      },
      {
        name: 'polinex',
        lastPrice: 0.01094002
      },
      {
        name: 'jubi',
        lastPrice: 0.0019
      }
    ]
  },
  {
    coin: 'doge',
    timestamp: 1111,
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 550
      }
    ]
  },
  {
    coin: 'fun',
    timestamp: 1111,
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 0.00204624
      },
      {
        name: 'polinex',
        lastPrice: 0.00104385
      },
      {
        name: 'jubi',
        lastPrice: 0.00204565
      }
    ]
  }
]

function sort (data) {
  const validPairs = data.filter(coinData => { return coinData.exchanges.length > 1 })
  const allPairs = validPairs.map(coinData => {
    const sortedCoin = {
      coin: coinData.coin,
      timestamp: coinData.timestamp
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
  console.log(sortedPairs)
}

sort(btcData)
