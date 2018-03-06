import React from 'react'
import {Line} from 'react-chartjs-2'
import {connect} from 'react-redux'

import './graph.css'
import CurrencySelector from './CurrencySelector/CurrencySelector'
import GraphLoading from '../GraphLoading/GraphLoading'
import {getGraphData} from '../../actions'

class Graph extends React.Component {
  componentDidMount () {
    this.props.dispatch(getGraphData())
  }

  render () {
    if (this.props.display && this.props.dollar[0] !== 'USD') {
      const currency = this.props.dollar[0] 
      const exchangesData = this.props.graph.datasets    
      const exchangeRate = this.props.rates[currency]    
      for (let i = 0; i < exchangesData.length; i++) {
        const convertedRate = exchangesData[i].data.map(currentValue => {
          return currentValue * exchangeRate
        })
        this.props.graph.datasets[i].data = convertedRate 
      }
    }
  
    return (
      <div>
        <CurrencySelector />
        <div className="graph">
          <h1>Bitcoin&ndash;{this.props.dollar[0]}</h1>
          <br/>
          {!this.props.display && <GraphLoading />}
          {this.props.display &&
        <Line
          data={this.props.graph}
          options={this.props.graph.options}
        />}
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    socket: state.socket,
    display: state.receivedGraph,
    graph: state.graphData.graph,
    dollar: state.currency.dollar,
    rates: state.currency.rates

  }
}

export default connect(mapStateToProps)(Graph)
