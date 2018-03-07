import React from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

import './graph.css'
import GraphLoading from '../GraphLoading/GraphLoading'
import {getGraphData} from '../../actions'

class Graph extends React.Component {
  componentDidMount() {
    this.props.dispatch(getGraphData())
  }

  render() {
    return (
      <div className="graph">
        <div className="graphHeader">
          <img src='/coins/BTC.png' alt='BTC' style={{ width: '40px', verticalAlign: 'text-bottom' }} />&nbsp;
        <h1>Live Bitcoin&ndash;USD</h1>
        </div>
        <br />
        {!this.props.display && <GraphLoading />}
        {this.props.display &&
          <Line
            data={this.props.graph}
            options={this.props.graph.options}
          />}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    socket: state.socket,
    display: state.receivedGraph,
    graph: state.graphData.graph

  }
}

export default connect(mapStateToProps)(Graph)
