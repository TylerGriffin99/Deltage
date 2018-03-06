import React from 'react'
import {connect} from 'react-redux'
import {coinData} from '../../actions/index'
import {filterMainTopFive} from '../../actions/filterMainTopFive'

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
    // filter exchang reslts here
    // const filtersBro = this.props.filters
    // const key = e.target.name
    // for (let i = 0; i < filtersBro; i++) {
    //   if (filtersBro[i] === key) {
    //     filtersBro.splice(i, 1)
    //   }
    // }
    // this.props.dispatch(coinData(['kraken', 'bittrex']))
    // this.setState({
    //   checked: !this.state.biitrex
    // })
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
                checked={this.state.bittrex}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
          Poloniex:
              <input
                name="poloniex"
                type="checkbox"
                checked={this.state.poloniex}
                onChange={this.handleInputChange} />
            </label>
            <label>
          Kraken:
              <input
                name="kraken"
                type="checkbox"
                checked={this.state.kraken}
                onChange={this.handleInputChange} />
            </label>
          </form>
        </div>
        <h1>Exchange Container</h1>
        <h1>Top Trades</h1>
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
              let lastCoin = data.allExchanges.length - 1
              return (
                <tr key={idx}>
                  <td>{data.coin}</td>
                  <td>{data.filteredDiff}</td>
                  <td>{data.allExchanges[lastCoin].name} {data.allExchanges[lastCoin].lastPrice} </td>
                  <td>{data.allExchanges[0].name} {data.allExchanges[0].lastPrice} </td>
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
    tableData: state.exchangeTable.sortedData,
    filters: state.exchangeTable.filters
  }
}

export default connect(mapStateToProps)(ExchangeDisplay)
