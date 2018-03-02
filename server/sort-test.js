const btcData = [
  pay: {
    bitrex: 500,
    polinex: 200,
    jubi: 10
  },
  eos: {
    bitrex: 200,
    polinex: 100,
    jubi: 400
  },
  doge: {
    bitrex: 200
  }
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