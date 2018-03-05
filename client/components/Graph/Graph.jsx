import React from 'react'
import {Line} from 'react-chartjs-2'
import io from 'socket.io-client'

import './graph.css'
import baseUrl from '../../lib/base-url'

class Graph extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount () {
    const socket = io(baseUrl)
    socket.on('graph_coin', (data) => {
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

export default Graph
