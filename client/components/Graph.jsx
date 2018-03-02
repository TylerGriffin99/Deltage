import React from 'react'
import { Line } from 'react-chartjs-2'


class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            graphData: {
                labels: ['11:11:10', '11:11:20', '11:11:30', '11:11:40', '11:11:50', '11:12:00', '11:12:10'],
                datasets: [
                    {
                        label: 'BitFoo',
                        fill: false,
                        lineTension: 0.0,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [0.0100, 0.0120, 1, 1.1, 0.0100, 0.0200, 0.0250]
                    },
                    {
                        label: 'BitBar',
                        fill: false,
                        lineTension: 0.0,
                        backgroundColor: 'rgba(75,72,192,0.4)',
                        borderColor: 'rgba(75,75,75,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,75,75,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,75,75,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [0.0130, 0.0121, 1.1, 1.2, 0.0110, 0.0210, 0.0260]
                    }
                ],
                options: {
                   
                }
            }
        }
    }
    render() {
        return (
            <div className="graph">
                <Line
                    data={this.state.graphData}
                    options={{}}
                />
            </div>
        )
    }

}
export default Graph