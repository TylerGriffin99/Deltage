import React from 'react'
import {connect} from 'react-redux'

import './exchangeDisplay.css'

class ExchangeDisplay extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      result: ''
    }
  }

  render(){
    return(
        <div className = 'exchangeContainer'>
          <h1>Exchange Container</h1>
          <table className = 'exchangeTable'>
            <thead>
              <tr>
                <th> Diff (%)</th>
                <th> Buy (Exc)</th>
                <th> Sell (Exc)</th>
                <th> Coin </th>
              </tr>
            </thead>
            <tbody>
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

mapStateToProps (state) {
  return {
    result: state.exchangeTable
  }
}

export default connect(mapStateToProps)(ExchangeDisplay)