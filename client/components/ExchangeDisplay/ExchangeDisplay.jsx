import React from 'react'
import {connect} from 'react-redux'

import './exchangeDisplay.css'

class ExchangeDisplay extends React.Component {
  // constructor (props) {
  //   super(props)
  // }
  render () {
    return (
      <div className = 'exchangeContainer'>
        <h1>Exchange Container</h1>
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
              <td>{this.props.receivedData && this.props.tableData[0].coin} </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    receivedData: state.exchangeTable.receivedData,
    tableData: state.exchangeTable.exchangeTable
  }
}

export default connect(mapStateToProps)(ExchangeDisplay)
