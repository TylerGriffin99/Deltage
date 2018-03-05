import React from 'react'
import {Line} from 'react-chartjs-2'
import {connect} from 'react-redux'

import './graph.css'
import {getGraphData} from '../../actions'

class Graph extends React.Component {
  componentDidMount () {
    this.props.dispatch(getGraphData())
  }

  render () {
    return (
      <div className="graph">
        <h1>Bitcoin $USD</h1>
        <br/>
        {this.props.display &&
        <Line
          data={this.props.graph}
          options={this.props.graph.options}
        />}
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    socket: state.socket,
    display: state.receivedGraph,
    graph: state.graphData.graph

  }
}

export default connect(mapStateToProps)(Graph)
