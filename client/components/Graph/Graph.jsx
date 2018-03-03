import React from 'react'
import {Line} from 'react-chartjs-2'
import graphData from './graphData'

class Graph extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      labels: ['11:11:10', '11:11:20', '11:11:30', '11:11:40', '11:11:50', '11:12:00', '11:12:10'],
      data1: [0.0130, 0.0121, 1.1, 1.2, 0.0110, 0.0210, 0.0260],
      data2: [0.0100, 0.0120, 1, 1.1, 0.0100, 0.0200, 0.0250]
    }
  }
  render () {
    const data = graphData
    data.labels = this.state.labels
    data.datasets[0].data = this.state.data1
    data.datasets[1].data = this.state.data2
    return (
      <div className="graph">
        <Line
          data={data}
          options={{}}
        />
      </div>
    )
  }
}

export default Graph
