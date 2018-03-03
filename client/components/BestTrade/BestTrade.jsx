import React from 'react'
import {connect} from 'react-redux'

import './bestTrade.css'

class BestTrade extends React.Component {
  render () {
    return (
      <div>
        <h1>Best Trade Component</h1>
        <br/>
        <h4>{this.props.receivedData && this.props.bestTrade.coin}</h4>
        <h4>Sell to: Jubi for 5% profit</h4>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    receivedData: state.bestTrade.receivedData,
    bestTrade: state.bestTrade.bestTrade
  }
}

export default connect(mapStateToProps)(BestTrade)
