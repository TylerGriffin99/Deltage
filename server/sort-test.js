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
  data.map(coinData => {
    if(coinData.exchanges.length <= 1){
      console.log('too small')
    }else{
      console.log('good to go')
    }
  })
}

sort(btcData)