import React from 'react'
import io from 'socket.io-client'
import {connect} from 'react-redux'

import './liveApp.css'
import Graph from '../Graph/Graph.jsx'
import Volumes from '../Volumes/Volumes.jsx'
import BestTrade from '../BestTrade/BestTrade.jsx'
import DollarValues from '../DollarValues/DollarValues.jsx'
import ExchangeDisplay from '../ExchangeDisplay/ExchangeDisplay.jsx'

<<<<<<< HEAD
import baseUrl from '../../lib/base-url'
import {coinData} from '../../actions' 
const {COIN_DATA} = require('../../../common/events')

class LiveApp extends React.Component{
=======
class LiveApp extends React.Component {
>>>>>>> f90eb9eb6cf81108c7fdd623c7532894ffb04958
  constructor (props) {
    super(props)
    this.state = {
      coin_prices: {},
      numberOfRequests: 0,
      results: [],
      socket: null,
      data: false,
      count: 0
    }
  }

<<<<<<< HEAD
componentDidMount () {
 const socket = io(baseUrl)
  socket.on(COIN_DATA, (data) => {
      console.log('socket', data)
      this.props.dispatch(coinData(data))
    })
  }


  render(){
    return (
      <div className = 'liveApp'>
      <h2>{this.state.count}</h2>
      <h3>{this.state.data && this.state.data.name}</h3>
=======
  render () {
    return (
      <div className = 'liveApp'>
        <h1> Delt&Delta;ge </h1>
>>>>>>> f90eb9eb6cf81108c7fdd623c7532894ffb04958
        <BestTrade/>
        <DollarValues />
        <ExchangeDisplay />
        <Volumes />
        <Graph />
      </div>
    )
  }
}

<<<<<<< HEAD
export default connect()(LiveApp)
=======
export default LiveApp
>>>>>>> f90eb9eb6cf81108c7fdd623c7532894ffb04958
