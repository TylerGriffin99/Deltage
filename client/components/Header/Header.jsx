import React from 'react'
import {connect} from 'react-redux'

import './header.css'
import {removeUser} from '../../utils/auth'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.goToLogin = this.goToLogin.bind(this)
  }
  goToLogin () {
    removeUser()
    this.props.history.push('/')
  }
  render () {
    return (
      <div className = 'Header'>
        <h1>Deltage</h1>
        <p>Deltage LOGO ETC</p>
        <button onClick={this.goToLogin}>Logout</button>
      </div>
    )
  }
}

export default connect()(Header)
