const markets = [
  {
    marketName: 'poloniex',
    URL: 'https://poloniex.com/public?command=returnTicker',
    toBTCURL: false,
    pairURL: '',

    last: function (data, coinPriceData) { // Where to find the last price of coin in JSON data
      return new Promise(function (resolve, reject) {
        try {
          // loop over incoming exchange data
          for (var obj in data) {
            // this if statment checks for BTC pairs
            if (obj.includes('BTC_') && obj !== 'BTC_EMC2') {
              // replace pair name to just the coin name
              let coinName = obj.replace('BTC_', '')

              for (let i = 0; i < coinPriceData.length; i++) {
                if (coinPriceData[i].coin === coinName) {
                  // let list = []
                  coinPriceData[i].exchanges.push({
                    name: 'poloniex',
                    lastPrice: data[obj].last,
                    highestBid: data[obj].highestBid,
                    lowestAsk: data[obj].lowestAsk,
                    volume: data[obj].quoteVolume
                  })
                }
              }
              let list = {
                coin: '',
                exchanges: []
              }
              list.coin = coinName
              list.exchanges.push({name: 'poloniex',
                lastPrice: data[obj].last,
                highestBid: data[obj].highestBid,
                lowestAsk: data[obj].lowestAsk,
                volume: data[obj].quoteVolume
              })
              coinPriceData.push(list)
            }
          }
          resolve(coinPriceData)
        } catch (err) {
          // console.log(err)
          reject(err)
        }
      })
    }

  },
  {
    marketName: 'bittrex',
    URL: 'https://bittrex.com/api/v1.1/public/getmarketsummaries',
    toBTCURL: false,
    pairURL: '',
    last: function (data, coinPriceData) { // Where to find the last price of coin in JSON data
      return new Promise(function (resolve, reject) {
        try {
          for (let obj of data.result) {
            if (obj['MarketName'].includes('BTC-')) {
              let coinName = obj['MarketName'].replace('BTC-', '')
              for (let i = 0; i < coinPriceData.length; i++) {
                if (coinPriceData[i].coin === coinName) {
                  // let list = []
                  coinPriceData[i].exchanges.push({
                    name: 'bittrex',
                    lastPrice: obj.Last,
                    highestBid: obj.Bid,
                    lowestAsk: obj.Ask,
                    volume: obj.Volume
                  })
                }
              }
              let list = {
                coin: '',
                exchanges: []
              }

              list.coin = coinName
              list.exchanges.push({
                name: 'bittrex',
                lastPrice: obj.Last,
                highestBid: obj.Bid,
                lowestAsk: obj.Ask,
                volume: obj.Volume
              })
              coinPriceData.push(list)
            }
          }
          resolve(coinPriceData)
        } catch (err) {
          // console.log(err)
          reject(err)
        }
      })
    }

  }
]

module.exports = markets
