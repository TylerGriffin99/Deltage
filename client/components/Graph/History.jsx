/* eslint no-unused-vars: 0 */
import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

import './graph.css'
import historyGraphData from './historyGraphData'
import { coins } from './coins'

const request = require('superagent')

class History extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coin: 'BTC',
      period: 0,
      timePeriod: 'Hour',
      historyGraphData
    }
    this.handleCoinChange = this.handleCoinChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.getData = this.getData.bind(this)
    this.apiURL = this.apiURL.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  timeString(secs) {
    return (this.state.period < 2)
      ? new Date(secs * 1000).toLocaleTimeString('en-NZ')
      : new Date(secs * 1000).toLocaleDateString('en-NZ')
  }

  apiURL() {
    const coin = this.state.coin
    const baseURL = 'https://min-api.cryptocompare.com/data/'
    switch (this.state.period) {
      case 0:
        this.setState({ timePeriod: 'Hour' })
        return `${baseURL}histominute?fsym=${coin}&tsym=USD&limit=60&aggregate=1&e=CCCAGG`
      case 1:
        this.setState({ timePeriod: 'Day' })
        return `${baseURL}histominute?fsym=${coin}&tsym=USD&limit=72&aggregate=20&e=CCCAGG`
      case 2:
        this.setState({ timePeriod: 'Week' })
        return `${baseURL}histohour?fsym=${coin}&tsym=USD&limit=56&aggregate=3&e=CCCAGG`
      case 3:
        this.setState({ timePeriod: 'Month' })
        return `${baseURL}histohour?fsym=${coin}&tsym=USD&limit=60&aggregate=12&e=CCCAGG`
      case 4:
        this.setState({ timePeriod: '3 Months' })
        return `${baseURL}histoday?fsym=${coin}&tsym=USD&limit=90&aggregate=1&e=CCCAGG`
      case 5:
        this.setState({ timePeriod: '6 Months' })
        return `${baseURL}histoday?fsym=${coin}&tsym=USD&limit=90&aggregate=2&e=CCCAGG`
      case 6:
        this.setState({ timePeriod: 'Year' })
        return `${baseURL}histoday?fsym=${coin}&tsym=USD&limit=90&aggregate=4&e=CCCAGG`
      default:
        return 'Error'
    }
  }

  getData() {
    const apiData = request
      .get(this.apiURL())
      .then(res => {
        let history = res.body.Data
        historyGraphData.options.scales.xAxes[0].labels = []
        historyGraphData.datasets[0].data = []
        historyGraphData.datasets[1].data = []
        Object.keys(history).forEach((coinTime) => {
          historyGraphData.options.scales.xAxes[0].labels.push(
            this.timeString(history[coinTime].time)
          )
          historyGraphData.datasets[0].data.push(
            history[coinTime].close
          )
          historyGraphData.datasets[1].data.push(
            history[coinTime].volumeto
          )
        })
        this.setState(historyGraphData)
      })
      .catch(err => {
        /* eslint no-console: 0 */
        return console.error(err.message)
      })
  }

  handleCoinChange(event) {
    this.setState({ coin: event.target.value }, () => {
      this.getData()
    })
  }

  handleTimeChange(event) {
    this.setState({ period: Number(event.target.value) }, () => {
      this.getData()
    })
  }

  render() {
    return (
      <div className="graph" >
        <h1>
          <img
            src={`/coins/${this.state.coin}.png`}
            alt={this.state.coin}
            style={{ width: '40px', verticalAlign: 'text-bottom' }}
          />&nbsp;
          {this.state.coin}&ndash;USD for the last {this.state.timePeriod}
        </h1>
        <select value={this.state.coin} onChange={this.handleCoinChange} className='dropDown'>
          {coins.map(coin => {
            return <option value={coin.code} key={coin.code}>{coin.name}</option>
          })}
        </select>&nbsp;
        <select value={this.state.period} onChange={this.handleTimeChange} className='dropDown'>
          <option value='0'>Hour</option>
          <option value='1'>Day</option>
          <option value='2'>Week</option>
          <option value='3'>Month</option>
          <option value='4'>3 Months</option>
          <option value='5'>6 Months</option>
          <option value='6'>Year</option>
        </select>
        <Bar
          data={this.state.historyGraphData}
          options={this.state.historyGraphData.options}
        />
      </div>
    )
  }
}

export default History
