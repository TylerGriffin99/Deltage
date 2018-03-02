import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './Login/Login'
import LiveApp from './LiveApp/LiveApp'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Router>
        <div className = 'app'>
          <Login path='/login'/>
          <LiveApp path='/live'/>
        </div>
      </Router>
    )
  }
}

export default App
