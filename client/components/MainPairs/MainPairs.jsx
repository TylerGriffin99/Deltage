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
                    Volume: {data.bittrex.volume}
                    <br/>
                    Last Price: {data.bittrex.lastPrice}
                    <br/>
                    Highest Bid: {data.bittrex.highestBid}
                    <br/>
                    Lowest Ask: {data.bittrex.lowestAsk}
                  </td>
                  <td>
                    Volume: {data.poloniex.volume}
                    <br/>
                    Last Price: {data.poloniex.lastPrice}
                    <br/>
                    Highest Bid: {data.poloniex.highestBid}
                    <br/>
                    Lowest Ask: {data.poloniex.lowestAsk}
                  </td>
                  <td>
                    Volume: {data.kraken.volume}
                    <br/>
                    Last Price: {data.kraken.lastPrice}
                    <br/>
                    Highest Bid: {data.kraken.highestBid}
                    <br/>
                    Lowest Ask: {data.kraken.lowestAsk}
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
