import React from 'react'
import {connect} from 'react-redux'
import {filterMainTopFive} from '../../actions/filterMainTopFive'

import './exchangeDisplay.css'

class ExchangeDisplay extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bittrex: true,
      poloniex: true,
      kraken: true,
      livecoin: true,
      bitfinex: true
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (e) {
    this.setState({
      [e.target.name]: e.target.checked
    }, () => {
      this.callDispatch(this.state)
    })
  }

  callDispatch (state) {
    let arr = []
    function filterArr (state) {
      for (let item in state) {
        if (state[item] === true) arr.push(item)
      }
    }
    filterArr(state)
    this.props.dispatch(filterMainTopFive(arr))
  }

  render () {
    return (
      <div className = 'exchangeContainer'>
        <div>
          <form>
        Select the exchanges you participate in
            <label >
          Bittrex:
              <input
                name="bittrex"
                type="checkbox"
                checked={this.state.bittrex}
                onChange={this.handleInputChange} />
              {/* <span className = "slider"></span> */}
            </label>
            <br />
            <label >
          Poloniex:
              <input
                name="poloniex"
                type="checkbox"
                checked={this.state.poloniex}
                onChange={this.handleInputChange} />
              {/* <span className = "slider"></span> */}
            </label>
            <label >
          Kraken:
              <input
                name="kraken"
                type="checkbox"
                checked={this.state.kraken}
                onChange={this.handleInputChange} />
              {/* <span className = "slider"></span> */}
            </label>
            <label >
          LiveCoin:
              <input
                name="livecoin"
                type="checkbox"
                checked={this.state.livecoin}
                onChange={this.handleInputChange} />
              {/* <span className = "slider"></span> */}
            </label>
            <label >
          Bitfinex:
              <input
                name="bitfinex"
                type="checkbox"
                checked={this.state.bitfinex}
                onChange={this.handleInputChange} />
              {/* <span className = "slider"></span> */}
            </label>
          </form>
        </div>
        <h1>Exchange Container</h1>
        <h1>Top Trades</h1>
        <table className = 'exchangeTable'>
          <thead>
            <tr className='bolder'>
              <th> Coin </th>
              <th> Buy (Exch)</th>
              <th> Sell (Exch)</th>
              <th> Diff (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.receivedData && this.props.tableData.map((data, idx) => {
              let lastCoin = data.allExchanges.length - 1
              return (
                <tr key={idx}>
                  <td>{data.coin}</td>
                  <td>
                    <img src={`/images/exch-imgs/${data.allExchanges[lastCoin].name}.png`} className = 'exch-img'/>
                    <p>
                      Last Price: {Number(data.allExchanges[lastCoin].lastPrice).toFixed(6)}
                    </p>
                    <p>
                      Volume: {Number(data.allExchanges[lastCoin].volume).toFixed(2)}
                    </p>
                  </td>
                  <td>
                    <img src={`/images/exch-imgs/${data.allExchanges[0].name}.png`} className = 'exch-img'/>
                    <p>
                      Last Price: {Number(data.allExchanges[0].lastPrice).toFixed(6)}
                    </p>
                    <p>
                      Volume: {Number(data.allExchanges[0].volume).toFixed(2)}
                    </p>
                  </td>
                  <td>
                    {Number(data.diff).toFixed(2)}
                  </td>
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
