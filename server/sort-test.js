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
  },
  {
    coin: 'woohoo',
    timestamp: 1111,
    exchanges: [
      {
        name: 'bitrex',
        lastPrice: 0.10204624
      },
      {
        name: 'polinex',
        lastPrice: 0.30104385
      },
      {
        name: 'jubi',
        lastPrice: 0.20204565
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
