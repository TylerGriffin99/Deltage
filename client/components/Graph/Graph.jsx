import React from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'


import './graph.css'
import graphData from './graphData'


class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            graphData
        }
    }
    componentDidMount() {
        this.getData()
        this.timerID = setInterval(
            () => this.getData(),
            10000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    timeString() {
        return new Date().toLocaleTimeString()
    }

    getData() {
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=bitfinex')
            .then(res => {
                let bitfinex = res.data
                const graphData = { ...this.state.graphData }
                graphData.labels = [...graphData.labels, this.timeString()]
                graphData.datasets[0].data = [...graphData.datasets[0].data, bitfinex.USD]
            this.setState({
                graphData
            })
        })
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=coinbase')
            .then(res => {
                let coinbase = res.data
                const graphData = { ...this.state.graphData }
                graphData.datasets[1].data = [...graphData.datasets[1].data, coinbase.USD]
            this.setState({
                    graphData
                })
            })
            
    }
    render() {
        console.log(this.state.graphData)
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