import React from 'react'

import Graph from '../Graph/Graph.jsx'
import Volumes from '../Volumes/Volumes.jsx'
import BestTrade from '../BestTrade/BestTrade.jsx'
import DollarValues from '../DollarValues/DollarValues.jsx'
import ExchangeDisplay from '../ExchangeDisplay/ExchangeDisplay.jsx'

class LiveApp extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      coin_prices: {},
      numberOfRequests: 0,
      results: []
    }
  }

  componentDidMount () {
    // getPoloniexData()
    //   .then((coin_prices) => {
    //     this.setState({
    //       coin_prices
    //     })
    //   })
    // // result.then(() => {})
  }
  render(){
    return (
      <div className = 'liveApp'>
        <BestTrade/>
        <DollarValues />
        <ExchangeDisplay />
        <Volumes />
        <Graph />
      </div>
    )
  }

}

export default LiveApp