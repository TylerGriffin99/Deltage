import React from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'


import './graph.css'
import graphData from './graphData'

let labels=[]
let data1=[]


class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: [],
            data1: []
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
            labels.push(this.timeString(LASTUPDATE))
            data1.push(PRICE)
            if (labels.length > 20){
                let removed=labels.shift()
                removed=data1.shift()
            }
            // console.log(labels, data1)
                this.setState({
                labels: labels,
                data1: data1
            })
        })
    }
    render() {
        const data = graphData
        data.labels = this.state.labels
        data.datasets[0].data = this.state.data1
        console.log(data)
        // data.datasets[1].data = this.state.data2
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