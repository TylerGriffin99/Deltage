import React from 'react'
import {connect} from 'react-redux'

import './bestTrade.css'

class BestTrade extends React.Component {
  render () {
    return (
      <div>
        <h1>Best Trade Component</h1>
        <table className = 'exchangeTable'>
          <thead>
            <tr>
              <th> Coin </th>
              <th> Diff (%)</th>
              <th> Buy (Exc)</th>
              <th> Sell (Exc)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.bestTrade.coin}</td>
              <td>{this.props.bestTrade.diff}</td>
              <td>Name: {this.props.bestTrade.buy.name} <br />Price (BTC): {this.props.bestTrade.buy.lastPrice} <br />Volume: {this.props.bestTrade.buy.volume} </td>
              <td>Name: {this.props.bestTrade.sell.name} <br />Price (BTC): {this.props.bestTrade.sell.lastPrice} <br />Volume: {this.props.bestTrade.sell.volume} </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    receivedData: state.receivedData.receivedData,
    bestTrade: state.bestTrade

  }
}

export default connect(mapStateToProps)(BestTrade)
