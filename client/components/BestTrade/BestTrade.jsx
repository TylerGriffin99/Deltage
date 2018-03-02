import React from 'react'

import './bestTrade.css'

class BestTrade extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>Best Trade Component</h1>
        <br/>
        <h4>Buy: 'DogeCoin' from Bittrex</h4><h4>Sell to: Jubi for 5% profit</h4>
      </div>
      )
    }
  }
  
  export default BestTrade