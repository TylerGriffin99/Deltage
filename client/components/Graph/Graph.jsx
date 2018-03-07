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
    converted: state.graphData.convertedGraph,
    dollar: state.currency.dollar,
    rates: state.currency.rates,
    displayConverted: state.graphData.useConverted

  }
}

export default connect(mapStateToProps)(Graph)
