const {COIN_DATA} = require('../common/events')

// REMOVE ONCE WORKING WITH REAL DATA
const data =
[ {coin: 'pay',
  timestamp: '2018-03-03T15:33:25.540',
  buy:
     {name: 'jubi',
       lastPrice: 0.0009,
       highestBid: 0.0009,
       lowestAsk: 0.0009,
       volume: 585302212.647},
  sell:
     {name: 'bitrex',
       lastPrice: 0.01044109,
       highestBid: 0.01044109,
       lowestAsk: 0.01044109,
       volume: 585302212.647},
  diff: 91.38021030371351},
{coin: 'great',
  timestamp: '2018-03-03T15:33:25.541',
  buy:
     {name: 'jubi',
       lastPrice: 0.0019,
       highestBid: 0.0019,
       lowestAsk: 0.0019,
       volume: 585302212.647},
  sell:
     {name: 'polinex',
       lastPrice: 0.01094002,
       highestBid: 0.01094002,
       lowestAsk: 0.01094002,
       volume: 585302212.647},
  diff: 82.632572883779},
{coin: 'woohoo',
  timestamp: '2018-03-03T15:33:25.541',
  buy:
     {name: 'bitrex',
       lastPrice: 0.10204624,
       highestBid: 0.10204624,
       lowestAsk: 0.10204624,
       volume: 585302212.647},
  sell:
     {name: 'polinex',
       lastPrice: 0.30104385,
       highestBid: 0.30104385,
       lowestAsk: 0.30104385,
       volume: 585302212.647},
  diff: 66.10253290342918},
{coin: 'fun',
  timestamp: '2018-03-03T15:33:25.541',
  buy:
     {name: 'polinex',
       lastPrice: 0.00104385,
       highestBid: 0.00104385,
       lowestAsk: 0.00104385,
       volume: 585302212.647},
  sell:
     {name: 'bitrex',
       lastPrice: 0.00204624,
       highestBid: 0.00204624,
       lowestAsk: 0.00204624,
       volume: 585302212.647},
  diff: 48.986922355148955},
{coin: 'eos',
  timestamp: '2018-03-03T15:33:25.541',
  buy:
     {name: 'polinex',
       lastPrice: 0.00004385,
       highestBid: 0.00004385,
       lowestAsk: 0.00004385,
       volume: 585302212.647},
  sell:
     {name: 'bitrex',
       lastPrice: 0.00004624,
       highestBid: 0.00004624,
       lowestAsk: 0.00004624,
       volume: 585302212.647},
  diff: 5.1686851211072575} ]

module.exports = function (socket) {
  setInterval(() => {
    socket.emit(COIN_DATA, data)
  }, 3000)
}
