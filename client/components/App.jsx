import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Volumes from './Volumes'
import BestTrade from './BestTrade'
import DollarValues from './DollarValues'
import ExchangeDisplay from './ExchangeDisplay'
import LiveApp from './LiveApp'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Router>
        <div className = 'app'>
          <BestTrade/>
          <DollarValues />
          <ExchangeDisplay />
          <LiveApp />
        </div>
      </Router>
    )
  }

}

export default App
