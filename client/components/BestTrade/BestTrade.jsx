import React from 'react'
import {connect} from 'react-redux'

import './bestTrade.css'

class BestTrade extends React.Component {
  render () {
    return (
      <div className='bestTrade'>
        <h1>Best Trade</h1>
        <div className='bestTradeContainer'>
          <div className='coin round'>
            <h2> Coin </h2>
            <h3 className='inner'>{this.props.bestTrade.coin}</h3>
          </div>
          <div className='diff'>
            <h2>Diff (%)</h2>
            <h3 className='inner'>{this.props.bestTrade.diff.toFixed(2)}</h3>
          </div>
          <div className='buy'>
            <h2>Buy (Exc)</h2>
            <div className='inner'>
              <img src={`/images/ex/${this.props.bestTrade.buy.name}.png`} alt={this.props.bestTrade.buy.name} />
              <p>
                Price (BTC): {Number(this.props.bestTrade.buy.lastPrice).toFixed(6)}
                <br />
                Volume: {Number(this.props.bestTrade.buy.volume).toFixed(2)}</p>
            </div>
          </div>
          <div className='sell'>
            <h2>Sell (Exc)</h2>
            <div className='inner'>
              <img src={`/images/ex/${this.props.bestTrade.sell.name}.png`} alt={this.props.bestTrade.sell.name} />
              <p>
                Price (BTC): {Number(this.props.bestTrade.sell.lastPrice).toFixed(6)}
                <br />
                Volume: {Number(this.props.bestTrade.sell.volume).toFixed(2)}</p>
            </div>
          </div>
        </div>
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
