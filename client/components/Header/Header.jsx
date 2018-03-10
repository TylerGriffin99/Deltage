import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import './header.css'
import {logoutUser} from '../../actions/logout'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    const goToLogin = () => this.props.history.push('/')
    this.props.logoutUser(goToLogin)
  }

  render () {
    return (
      <div className='header'>
        <div className='imageLogo'>
          <img className='logo' src="images/loaderBlack.png" alt="Deltage Title" />
          <img className='words' src="images/deltageWordsBlack.png" alt="Deltage Title" />
        </div>
        <button onClick={this.handleClick}>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (redir) => {
      return dispatch(logoutUser(redir))
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Header))
