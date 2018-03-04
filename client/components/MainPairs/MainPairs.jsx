import React from 'react'
import {connect} from 'react-redux'

import './mainPairs.css'

class MainPairs extends React.Component {
  render () {
    return (
      <div className = 'exchangeContainer'>
        <h1>Exchange Container</h1>
        <table className = 'exchangeTable'>
          <thead>
            <tr>
              <th> Pair </th>
              <th> Bitrex</th>
              <th> Polinex</th>
              <th> Kraken</th>
            </tr>
          </thead>
          {/* <tbody>
            {this.props.receivedData && this.props.tableData.map((data, idx) => {
              if (data.coin === 'PAY' || data.coin === 'EOS' || data.coin === 'ETH' || data.coin === 'XVC' || data.coin === 'VRC') {
                return (
                  <tr key={idx}>
                    <td>BTC - {data.coin}</td>
                    <td>
                      {data.allExchanges[0].name}
                      <br/>
                      {data.allExchanges[0].volume}
                      <br/>
                      {data.allExchanges[0].lastPrice}
                    </td>
                    <td>
                      {data.allExchanges[1].name}
                      <br/>
                      {data.allExchanges[1].volume}
                      <br/>
                      {data.allExchanges[1].lastPrice}
                    </td>
                    <td>
                      {data.allExchanges[2].name}
                      <br/>
                      {data.allExchanges[2].volume}
                      <br/>
                      {data.allExchanges[2].lastPrice}
                    </td>
                  </tr>
                )
              }
            })}
          </tbody> */}
        </table>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    receivedData: state.receivedData,
    tableData: state.allExchange
  }
}

export default connect(mapStateToProps)(MainPairs)
