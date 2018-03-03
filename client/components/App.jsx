import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Route} from 'react-router-dom'

import Login from './Login/Login'
import LiveApp from './LiveApp/LiveApp'
import {confirmToken, noToken} from '../actions/checkToken'

class App extends React.Component {
  componentDidMount () {
    if (window.localStorage.getItem('token')) {
      this.props.dispatch(confirmToken())
      const goToLiveApp = () => this.props.history.push('/LiveApp')
      goToLiveApp()
    } else {
      this.props.dispatch(noToken())
    }
  }

  render () {
    return (
      <div className = 'app'>
        {!this.props.showLive && <Route exact path='/' component = {Login}/>}
        {this.props.showLive && <Route exact path='/LiveApp' component = {LiveApp}/>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showLive: state.showLive
  }
}

export default withRouter(connect(mapStateToProps)(App))
