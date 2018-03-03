import React from 'react'

import './header.css'
import {removeUser} from '../../utils/auth'

class Header extends React.Component {
  render () {
    return (
      <div className = 'Header'>
        <h1>Deltage</h1>
        <p>Deltage LOGO ETC</p>
        <button onClick={removeUser}>Logout</button>
      </div>
    )
  }
}

export default Header
