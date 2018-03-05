import React from 'react'
import {Line} from 'react-chartjs-2'
import {connect} from 'react-redux'

import './graph.css'
import {graphData} from '../../actions'
const {GRAPH_DATA} = require('../../../common/events')

class Graph extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount () {
    this.props.socket.on(GRAPH_DATA, (data) => {
      console.log(data)
      this.props.dispatch(graphData(data))
    })
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  render () {
    return (
      <div className="graph">
        <h2>Bitcoin $USD</h2>
        <br/>
        <Line
          data={this.props.graph}
          // options={this.props.graph.options}
        />
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    socket: state.socket,
    graph: state.graphData.graph

  }
}

export default connect(mapStateToProps)(Graph)
