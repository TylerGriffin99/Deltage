import React from 'react'
import {connect} from 'react-redux'

import './liveApp.css'
import Header from '../Header/Header'
import Graph from '../Graph/Graph.jsx'
import {getCoinData} from '../../actions'
import Footer from '../Footer/Footer.jsx'
import History from '../Graph/History.jsx'
import Loading from '../Loading/Loading.jsx'
import MainPairs from '../MainPairs/MainPairs'
import CryptoNews from '../CryptoNews/CryptoNews'
import BestTrade from '../BestTrade/BestTrade.jsx'
import {openSocket, closeSocket} from '../../lib/socket'
import ExchangeDisplay from '../ExchangeDisplay/ExchangeDisplay.jsx'

class LiveApp extends React.Component {
  componentDidMount () {
    openSocket()
    this.props.dispatch(getCoinData())
  }

  componentWillUnmount () {
    closeSocket()
  }

  render () {
    return (
      <div className='content'>
        {!this.props.loaded && <Loading />}
        {this.props.loaded && <Header />}
        <div className='liveApp'>
          {this.props.loaded && <ExchangeDisplay />}
          {this.props.loaded && <BestTrade />}
          {this.props.loaded && <Graph />}
          {this.props.loaded && <MainPairs />}
          {this.props.loaded && <History />}
          {this.props.loaded && <CryptoNews />}
        </div>
        {this.props.loaded && <Footer />}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loaded: state.receivedData,
    socket: state.socket
  }
}

export default connect(mapStateToProps)(LiveApp)
