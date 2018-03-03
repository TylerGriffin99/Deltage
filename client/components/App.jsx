import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './Login/Login'
import LiveApp from './LiveApp/LiveApp'
import {confirmToken, noToken} from '../actions/checkToken'

class App extends React.Component {
  componentDidMount () {
    if (window.localStorage.getItem('token')) {
      this.props.dispatch(confirmToken)
    } else {
      this.props.dispatch(noToken)
    }
  }

  render () {
    return (
      <Router>
        <div className = 'app'>
          {!this.props.showLive && <Route exact path='/' component = {Login}/>}
          {this.props.showLive && <Route exact path='/live' component = {LiveApp}/>}
        </div>
      </Router>
    )
  }
}

function mapStateToProps (state) {
  return {
    showLive: state.showLive
  }
}

export default connect(mapStateToProps)(App)
