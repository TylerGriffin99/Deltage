import React from 'react'
import {Line} from 'react-chartjs-2'
import {connect} from 'react-redux'

import './graph.css'

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
        {/* <Line
          data={this.state.graphData}
          options={this.state.graphData.options}
        /> */}
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    socket: state.socket
  }
}

export default connect(mapStateToProps)(Graph)
