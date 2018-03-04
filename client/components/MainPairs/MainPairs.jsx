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
          <tbody>
            {this.props.receivedData && this.props.tableData.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td>{data.coin}</td>
                  <td>{data.diff}</td>
                  <td>{data.buy.name} {data.buy.lastPrice} </td>
                  <td>{data.sell.name} {data.sell.lastPrice} </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    receivedData: state.receivedData.receivedData,
    tableData: state.exchangeTable.exchangeTable
  }
}

export default connect(mapStateToProps)(MainPairs)
