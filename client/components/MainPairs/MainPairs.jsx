import React from 'react'
import {connect} from 'react-redux'

import './mainPairs.css'

class MainPairs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showVolume: true,
      showLastPrice: true,
      showHighestBid: false,
      showLowestAsk: false
    }
    this.flipCheckbox = this.flipCheckbox.bind(this)
  }

  flipCheckbox (e) {
    this.setState({
      [e.target.id]: e.target.checked
    })
  }

  render () {
    function setToNumber (data, dp) {
      if (isNaN(Number(data))) {
        return 'N/A'
      } else {
        return Number(data).toFixed(dp)
      }
    }
    const displayHighestBid = this.state.showHighestBid ? 'block' : 'none'
    const displayLastPrice = this.state.showLastPrice ? 'block' : 'none'
    const displayLowestAsk = this.state.showLowestAsk ? 'block' : 'none'
    const displayVolume = this.state.showVolume ? 'block' : 'none'
    return (
      <div className = 'main-pairs-container'>
        <h1>Main Pairs</h1>
        <div className = 'display-checks'>
          <div className = 'check-column'>
            <p>Volumes:  </p>
            <label className = "displaySwitch" >
              <input type='checkbox' id='showVolume' className ='checkbox' defaultChecked={this.state.showVolume} onClick = {this.flipCheckbox}/>
              <span className = "slider"></span>
            </label>
            <p>Daily Highest Bid: </p>
            <label className = "displaySwitch" >
              <input type='checkbox' id='showHighestBid' className ='checkbox' defaultChecked={this.state.showHighestBid} onClick = {this.flipCheckbox}/>
              <span className = "slider"></span>
            </label>
          </div>
          <div className = 'check-column'>
            <p>Current Last Price: </p>
            <label className = "displaySwitch" >
              <input type='checkbox' id='showLastPrice' className ='checkbox' defaultChecked={this.state.showLastPrice} onClick = {this.flipCheckbox}/>
              <span className = "slider"></span>
            </label>
            <p>Daily Lowest Ask:</p>
            <label className = "displaySwitch" >
              <input type='checkbox' id='showLowestAsk' className ='checkbox' defaultChecked={this.state.showLowestAsk} onClick = {this.flipCheckbox}/>
              <span className = "slider"></span>
            </label>
          </div>
        </div>
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
                    <span style={{display: displayVolume}}>
                      <p>
                        <strong> Volume: </strong>
                      </p>
                      {setToNumber(data.bittrex.volume, 2)}
                    </span>
                    <span style={{display: displayLastPrice}}>
                      <p>
                        <strong> Last Price: </strong>
                      </p>
                      {setToNumber(data.bittrex.lastPrice, 6)}
                    </span>
                    <span style={{display: displayHighestBid}}>
                      <p>
                        <strong> Highest Bid: </strong>
                      </p>
                      {setToNumber(data.bittrex.highestBid, 6)}
                    </span>
                    <span style={{display: displayLowestAsk}}>
                      <p>
                        <strong> Lowest Ask:  </strong>
                      </p>
                      {setToNumber(data.bittrex.lowestAsk, 6)}
                    </span>
                  </td>
                  <td>
                    <span style={{display: displayVolume}}>
                      <p>
                        <strong> Volume: </strong>
                      </p>
                      {setToNumber(data.poloniex.volume, 2)}
                    </span>
                    <span style={{display: displayLastPrice}}>
                      <p>
                        <strong> Last Price: </strong>
                      </p>
                      {setToNumber(data.poloniex.lastPrice, 6)}
                    </span>
                    <span style={{display: displayHighestBid}}>
                      <p>
                        <strong> Highest Bid: </strong>
                      </p>
                      {setToNumber(data.poloniex.highestBid, 6)}
                    </span>
                    <span style={{display: displayLowestAsk}}>
                      <p>
                        <strong> Lowest Ask:  </strong>
                      </p>
                      {setToNumber(data.poloniex.lowestAsk, 6)}
                    </span>
                  </td>
                  <td>
                    <span style={{display: displayVolume}}>
                      <p>
                        <strong> Volume: </strong>
                      </p>
                      {setToNumber(data.kraken.volume, 2)}
                    </span>
                    <span style={{display: displayLastPrice}}>
                      <p>
                        <strong> Last Price: </strong>
                      </p>
                      {setToNumber(data.kraken.lastPrice, 6)}
                    </span>
                    <span style={{display: displayHighestBid}}>
                      <p>
                        <strong> Highest Bid: </strong>
                      </p>
                      {setToNumber(data.kraken.highestBid, 6)}
                    </span>
                    <span style={{display: displayLowestAsk}}>
                      <p>
                        <strong> Lowest Ask:  </strong>
                      </p>
                      {setToNumber(data.kraken.lowestAsk, 6)}
                    </span>
                  </td>
                  <td>
                    <span style={{display: displayVolume}}>
                      <p>
                        <strong> Volume: </strong>
                      </p>
                      {setToNumber(data.bitfinex.volume, 2)}
                    </span>
                    <span style={{display: displayLastPrice}}>
                      <p>
                        <strong> Last Price: </strong>
                      </p>
                      {setToNumber(data.bitfinex.lastPrice, 6)}
                    </span>
                    <span style={{display: displayHighestBid}}>
                      <p>
                        <strong> Highest Bid: </strong>
                      </p>
                      {setToNumber(data.bitfinex.highestBid, 6)}
                    </span>
                    <span style={{display: displayLowestAsk}}>
                      <p>
                        <strong> Lowest Ask:  </strong>
                      </p>
                      {setToNumber(data.bitfinex.lowestAsk, 6)}
                    </span>
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
