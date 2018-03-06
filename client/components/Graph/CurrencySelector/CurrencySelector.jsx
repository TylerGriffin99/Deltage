import React from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

import {changeCurrency} from '../../../actions/currency'

class CurrencySelctor extends React.Component {
  constructor (props) {
    super(props)
    this.selectCurrency = this.selectCurrency.bind(this)
  }
  componentDidMount () {
    request
      .get('https://api.fixer.io/latest?base=USD')
      .then((res) => {
        console.log(res.body)
        return res.body
      })
  }
  selectCurrency (evt) {
    const currency = evt.target.value
    this.props.dispatch(changeCurrency(currency))
  }

  render () {
    return (
      <div className='currency'>
        <select onChange={this.selectCurrency}>
          <option value='USD'>USD</option>
          <option value='AUD'>AUD</option>
          <option value='BGN'>BGN</option>
          <option value='BRL'>BRL</option>
          <option value='CAD'>CAD</option>
          <option value='CHF'>CHF</option>
          <option value='CNY'>CNY</option>
          <option value='CZK'>CZK</option>
          <option value='DKK'>DKK</option>
          <option value='EUR'>EUR</option>
          <option value='GBP'>GBP</option>
          <option value='HKD'>HKD</option>
          <option value='HRK'>HRK</option>
          <option value='HUF'>HUF</option>
          <option value='IDR'>IDR</option>
          <option value='ILS'>ILS</option>
          <option value='INR'>INR</option>
          <option value='ISK'>ISK</option>
          <option value='KRW'>KRW</option>
          <option value='MYR'>MYR</option>
          <option value='NOK'>NOK</option>
          <option value='NZD'>NZD</option>
          <option value='PHP'>PHP</option>
          <option value='PLN'>PLN</option>
          <option value='RON'>RON</option>
          <option value='REB'>REB</option>
          <option value='SEK'>SEK</option>
          <option value='SGD'>SGD</option>
          <option value='THB'>THB</option>
          <option value='TRY'>TRY</option>
          <option value='ZAR'>ZAR</option>
        </select>
      </div>
    )
  }
}

export default connect()(CurrencySelctor)
