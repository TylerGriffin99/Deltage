const btcData = [
  {
    coin:'pay',
    exchanges:[
      {
        name: 'bitrex',
        lastPrice: 500
      },
      {
        name: 'polinex',
        lastPrice: 200
      },
      {
        name: 'jubi',
        lastPrice: 10
      }
    ]
  },
  {
    coin:'eos',
    exchanges:[
      {
        name: 'bitrex',
        lastPrice: 500
      },
      {
        name: 'polinex',
        lastPrice: 200
      },
      {
        name: 'jubi',
        lastPrice: 10
      }
    ]
  },
  {
    coin:'doge',
    exchanges:[
      {
        name: 'bitrex',
        lastPrice: 500
      }
    ]
  },
]

function sort (data){
  for(coin in data){
    console.log(coin)
    if(coin.length>1){
      console.log('big')
    } else {
      console.log('small')
    }
  }
}

sort(btcData)