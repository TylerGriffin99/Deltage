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
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=bittrex')
            .then(res => {
                let bittrex = res.data
                const graphData = { ...this.state.graphData }
                graphData.labels = [...graphData.labels, this.timeString()]
                graphData.datasets[0].data = [...graphData.datasets[0].data, bittrex.USD]
                this.setState({
                    graphData
                })
            })
        axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=poloniex')
            .then(res => {
                let poloniex = res.data
                const graphData = { ...this.state.graphData }
                graphData.datasets[1].data = [...graphData.datasets[1].data, poloniex.USD]
                this.setState({
                    graphData
                })
            })
            axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=kraken')
            .then(res => {
                let kraken = res.data
                const graphData = { ...this.state.graphData }
                graphData.datasets[2].data = [...graphData.datasets[2].data, kraken.USD]
                this.setState({
                    graphData
                })
            })
    }

    render() {
        return (
            <div className="graph">
            <h2>Bitcoin $USD</h2>
            <br/>
                <Line
                    data={this.state.graphData}
                    options={this.state.graphData.options}
                />
            </div>
        )
    }

}

export default Graph
