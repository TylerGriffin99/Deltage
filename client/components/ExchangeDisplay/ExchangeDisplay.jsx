import React from 'react'
import {connect} from 'react-redux'
import {filterMainTopFive} from '../../actions/filterMainTopFive'
import {coinData} from '../../actions'
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
    this.handleTopTrades = this.handleTopTrades.bind(this)
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

  handleTopTrades (evt) {
    const numberOfTrades = Number(evt.target.value)
    console.log(numberOfTrades)
    this.props.dispatch(coinData(this.props.data, numberOfTrades))
  }

  render () {
    return (
      <div className='exchangeContainer'>
        <h1>Top Trades</h1>
        <div className='main-pairs-container'>
          <div className='check-row-5'>
            <form>
              <p>Bittrex:</p>
              <label className="displaySwitch">
                <input
                  className='checkbox'
                  name="bittrex"
                  type="checkbox"
                  checked={this.state.bittrex}
                  onChange={this.handleInputChange} />
                <span className="slider"></span>
              </label>
              <p>Poloniex:</p>
              <label className="displaySwitch">
                <input
                  className='checkbox'
                  name="poloniex"
                  type="checkbox"
                  checked={this.state.poloniex}
                  onChange={this.handleInputChange} />
                <span className="slider"></span>
              </label>
              <p>Kraken:</p>
              <label className="displaySwitch">
                <input
                  className='checkbox'
                  name="kraken"
                  type="checkbox"
                  checked={this.state.kraken}
                  onChange={this.handleInputChange} />
                <span className="slider"></span>
              </label>
              <p>LiveCoin:</p>
              <label className="displaySwitch">
                <input
                  className='checkbox'
                  name="livecoin"
                  type="checkbox"
                  checked={this.state.livecoin}
                  onChange={this.handleInputChange} />
                <span className="slider"></span>
              </label>
              <p>Bitfinex:</p>
              <label className="displaySwitch">
                <input
                  className='checkbox'
                  name="bitfinex"
                  type="checkbox"
                  checked={this.state.bitfinex}
                  onChange={this.handleInputChange} />
                <span className="slider"></span>
              </label>
            </form>
          </div>
          <select onChange={this.handleTopTrades}>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
          </select>
        </div>
        <table className='exchangeTable'>
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
              return data.allExchanges.length > 0 ? (
                <tr key={`${data.coin}${data.allExchanges.diff}`}>
                  <td>{data.coin}</td>
                  <td>
                    <img src={`/images/exch-imgs/${data.allExchanges[lastCoin].name}.png`} className='exch-img' />
                    <p>
                      Last Price: {Number(data.allExchanges[lastCoin].lastPrice).toFixed(6)}
                    </p>
                    <p>
                      Volume: {Number(data.allExchanges[lastCoin].volume).toFixed(2)}
                    </p>
                  </td>
                  <td>
                    <img src={`/images/exch-imgs/${data.allExchanges[0].name}.png`} className='exch-img' />
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
              ) : null
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
    filters: state.exchangeTable.filters,
    data: state.exchangeTable.data
  }
}

export default connect(mapStateToProps)(ExchangeDisplay)
