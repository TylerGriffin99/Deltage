import React from 'react'
import {connect} from 'react-redux'

import './exchangeDisplay.css'

class ExchangeDisplay extends React.Component {
  constructor () {
    super()
    this.state = {
      bittrex: true,
      poloniex: true,
      kraken: true,
      checked: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    // filter exchange results here


    
    this.setState({
      checked: !this.state.checked
    })
  } 

  render () {
    console.log(this.props.receivedData)
    console.log(this.props.tableData)
    return (
      <div className = 'exchangeContainer'>
        <div>
          <form>
        Select the exchanges you participate in
            <label>
          Bittrex:
              <input
                name="bittrex"
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
          Poloniex:
              <input
                name="poloniex"
                type="checkbox"
                checked={this.state.poloniexChecked}
                onChange={this.handleInputChange} />
            </label>
            <label>
          Kraken:
              <input
                name="kraken"
                type="checkbox"
                checked={this.state.krakenChecked}
                onChange={this.handleInputChange} />
            </label>
          </form>
        </div>
        <h1>Exchange Container</h1>
        <table className = 'exchangeTable'>
          <thead>
            <tr className='bolder'>
              <th> Coin </th>
              <th> Diff (%)</th>
              <th> Buy (Exc)</th>
              <th> Sell (Exc)</th>
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
    receivedData: state.receivedData,
    tableData: state.exchangeTable
  }
}

export default connect(mapStateToProps)(ExchangeDisplay)
