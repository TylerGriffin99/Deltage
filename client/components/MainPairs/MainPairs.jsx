import React from 'react'
import {connect} from 'react-redux'

import './mainPairs.css'

class MainPairs extends React.Component {
  render () {
    return (
      <div className = 'main-pairs-container'>
        <h1>Main Pairs</h1>
        <table className = 'main-pairs-table'>
          <thead>
            <tr>
              <th> Pair </th>
              <th> Bittrex</th>
              <th> Polinex</th>
              <th> Kraken</th>
            </tr>
          </thead>
          <tbody>
            {this.props.receivedData && this.props.tableData.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td>
                    BTC - {data.coin}
                  </td>
                  <td>
                    Volume: {data.bittrex.volume.toFixed(2)}
                    <br/>
                    Last Price: {data.bittrex.lastPrice.toFixed(6)}
                    <br/>
                    Highest Bid: {data.bittrex.highestBid.toFixed(6)}
                    <br/>
                    Lowest Ask: {data.bittrex.lowestAsk.toFixed(6)}
                  </td>
                  <td>
                    Volume: {Number(data.poloniex.volume).toFixed(2)}
                    <br/>
                    Last Price: {Number(data.poloniex.lastPrice).toFixed(6)}
                    <br/>
                    Highest Bid: {Number(data.poloniex.highestBid).toFixed(6)}
                    <br/>
                    Lowest Ask: {Number(data.poloniex.lowestAsk).toFixed(6)}
                  </td>
                  <td>
                    Volume: {Number(data.kraken.volume).toFixed(2)}
                    <br/>
                    Last Price: {Number(data.kraken.lastPrice).toFixed(6)}
                    <br/>
                    Highest Bid: {Number(data.kraken.highestBid).toFixed(6)}
                    <br/>
                    Lowest Ask: {Number(data.kraken.lowestAsk).toFixed(6)}
                  </td>
                </tr>
              )
            }
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    receivedData: state.receivedData,
    tableData: state.mainPairs
  }
}

export default connect(mapStateToProps)(MainPairs)
