import React from 'react'
import {connect} from 'react-redux'

import './mainPairs.css'

class MainPairs extends React.Component {
  render () {
    function setToNumber (data, dp) {
      if (isNaN(Number(data))) {
        return 'Not Available'
      } else {
        return Number(data).toFixed(dp)
      }
    }
    return (
      <div className = 'main-pairs-container'>
        <h1>Main Pairs</h1>
        <table className = 'main-pairs-table'>
          <thead>
            <tr>
              <th> Pair </th>
              <th> Bittrex </th>
              <th> Polinex </th>
              <th> Kraken </th>
              <th> Bitfinex </th>
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
                    Volume: {setToNumber(data.poloniex.volume, 2)}
                    <br/>
                    Last Price: {setToNumber(data.poloniex.lastPrice, 6)}
                    <br/>
                    Highest Bid: {setToNumber(data.poloniex.highestBid, 6)}
                    <br/>
                    Lowest Ask: {setToNumber(data.poloniex.lowestAsk, 6)}
                  </td>
                  <td>
                    Volume: {setToNumber(data.kraken.volume, 2)}
                    <br/>
                    Last Price: {setToNumber(data.kraken.lastPrice, 6)}
                    <br/>
                    Highest Bid: {setToNumber(data.kraken.highestBid, 6)}
                    <br/>
                    Lowest Ask: {setToNumber(data.kraken.lowestAsk, 6)}
                  </td>
                  <td>
                    Volume: {setToNumber(data.bitfinex.volume, 2)}
                    <br/>
                    Last Price: {setToNumber(data.bitfinex.lastPrice, 6)}
                    <br/>
                    Highest Bid: {setToNumber(data.bitfinex.highestBid, 6)}
                    <br/>
                    Lowest Ask: {setToNumber(data.bitfinex.lowestAsk, 6)}
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
