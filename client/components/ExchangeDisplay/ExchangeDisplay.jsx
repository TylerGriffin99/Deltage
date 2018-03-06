import React from 'react'
import {connect} from 'react-redux'

import './exchangeDisplay.css'

class ExchangeDisplay extends React.Component {
  render () {
    return (
      <div className = 'exchangeContainer'>
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
              return (
                <tr key={idx}>
                  <td>{data.coin}</td>
                  <td>
                    <img src={`/images/exch-imgs/${data.buy.name}.png`} className = 'exch-img'/>
                    <p>
                      Last Price: {Number(data.buy.lastPrice).toFixed(6)}
                    </p>
                    <p>
                      Volume: {Number(data.buy.volume).toFixed(2)}
                    </p>
                  </td>
                  <td>
                    <img src={`/images/exch-imgs/${data.sell.name}.png`} className = 'exch-img'/>
                    <p>
                      Last Price: {Number(data.sell.lastPrice).toFixed(6)}
                    </p>
                    <p>
                      Volume: {Number(data.sell.volume).toFixed(2)}
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
    tableData: state.exchangeTable
  }
}

export default connect(mapStateToProps)(ExchangeDisplay)
