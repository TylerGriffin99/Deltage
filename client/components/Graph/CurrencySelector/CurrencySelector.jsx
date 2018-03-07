import React from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

import {changeGraphCurrency, sendRates, changeGraph} from '../../../actions/currency'

class CurrencySelctor extends React.Component {
  constructor (props) {
    super(props)
    this.selectCurrency = this.selectCurrency.bind(this)
  }
  componentDidMount () {
    request
      .get('https://api.fixer.io/latest?base=USD')
      .then((res) => {
        const rates = res.body.rates
        this.props.dispatch(sendRates(rates))
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.error(err.message)
      })
  }
  selectCurrency (evt) {
    const currency = evt.target.value
    this.props.dispatch(changeGraphCurrency(currency)).then(() => {
      this.props.dispatch(changeGraph(this.props.currencies, this.props.rates))
    })
  }

  render () {
    const countries = Object.keys(this.props.rates)
    return (
      <div className='currency'>
        <select onChange={this.selectCurrency}>
          <option value='USD'>USD</option>
          {countries.map((country, idx) => {
            return <option key={idx} value={country}>{country}</option>
          })}
        </select>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    currencies: state.currency.dollar,
    rates: state.currency.rates

  }
}

export default connect(mapStateToProps)(CurrencySelctor)
