import React from 'react'
import {connect} from 'react-redux'

import './bestTrade.css'

class BestTrade extends React.Component {
  render () {
    return (
      <div>
        <h1>Best Trade</h1>
        <table className = 'bestTrade'>
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
              <td>{this.props.bestTrade.diff.toFixed(2)}</td>
              <td>
                Name: {this.props.bestTrade.buy.name}
                <br/>
                Price (BTC): {Number(this.props.bestTrade.buy.lastPrice).toFixed(6)}
                <br/>
                Volume: {Number(this.props.bestTrade.buy.volume).toFixed(2)}
              </td>
              <td>
                Name: {this.props.bestTrade.sell.name}
                <br/>
                Price (BTC): {Number(this.props.bestTrade.sell.lastPrice).toFixed(6)}
                <br/>
                Volume: {Number(this.props.bestTrade.sell.volume).toFixed(2)}
              </td>
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
