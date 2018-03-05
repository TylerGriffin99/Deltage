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
              let added = false
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
                  added = true
                }
              }
              if (!added) {
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
          }
          return resolve(coinPriceData)
        } catch (err) {
          return reject(err)
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
              let added = false
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
                  added = true
                }
              }
              if (!added) {
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
          }
          return resolve(coinPriceData)
        } catch (err) {
          return reject(err)
        }
      })
    }

  },
  {

    marketName: 'kraken', // kraken has no one size fits all market summery so each pair has to be entered as param in GET - will need to add new coins as they are added to exchange
    URL: 'https://api.kraken.com/0/public/Ticker?pair=BCHXBT,DASHXBT,EOSXBT,GNOXBT,ETCXBT,ETHXBT,ICNXBT,LTCXBT,MLNXBT,REPXBT,XDGXBT,XLMXBT,XMRXBT,XRPXBT,ZECXBT', // URL To Fetch API From.
    toBTCURL: false, // URL, if needed for an external bitcoin price api.
    pairURL: '',
    last: function (data, coinPriceData) { // Get the last price of coins in JSON data
      return new Promise(function (resolve, reject) {
        try {
          for (let key in data.result) {
            let arr = key.match(/BCH|DASH|EOS|GNO|ETC|ETH|ICN|LTC|MLN|REP|XDG|XLM|XMR|XRP|ZEC/) // matching real names to weird kraken api coin pairs like "XETCXXBT" etc
            // let name = key
            let matchedName = arr[0]
            let coinName = key
            let added = false
            if (matchedName === 'XDG') { // kraken calls DOGE "XDG" for whatever reason
              let matchedName = 'DOGE'
              coinName = matchedName
            } else {
              coinName = matchedName
            }
            for (let i = 0; i < coinPriceData.length; i++) {
              if (coinPriceData[i].coin === coinName) {
                coinPriceData[i].exchanges.push({
                  name: 'kraken',
                  lastPrice: data.result[key].c[0],
                  highestBid: data.result[key].b[0],
                  lowestAsk: data.result[key].a[0],
                  volume: data.result[key].v[0]
                })
                added = true
              }
            }
            if (!added) {
              let list = {
                coin: '',
                exchanges: []
              }

              list.coin = coinName
              list.exchanges.push({
                name: 'kraken',
                lastPrice: data.result[key].c[0],
                highestBid: data.result[key].b[0],
                lowestAsk: data.result[key].a[0],
                volume: data.result[key].v[0]
              })
              coinPriceData.push(list)
            }
          } // end initial for loop
          return resolve(coinPriceData)
        } catch (err) {
          return reject(err)
        }
      })
    }
  }
]

module.exports = markets
