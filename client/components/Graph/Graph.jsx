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
    componentDidMount(){
        this.getData()
        this.timerID = setInterval(
            () => this.getData(),
            10000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    timeString(secs){
        return new Date(secs*1000).toLocaleTimeString()
    }

    getData(){
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD')
        .then(res => {
            let cryptos = res.data.RAW.BTC.USD
            let {LASTUPDATE, PRICE} = cryptos
            const graphData = {...this.state.graphData}
            graphData.labels = [...graphData.labels, this.timeString[LASTUPDATE]]
            graphData.datasets[0].data = [...graphData.datasets[0].data, PRICE]
            // if (graphData.labels.length > 20){
            //     let removed=labels.shift()
            //     removed=data1.shift()
            // }
            // console.log(labels, data1)
            this.setState({
                graphData
            })
        })
    }
    render() {
        console.log(this.state.graphData)
        // data.datasets[1].data = this.state.data2
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