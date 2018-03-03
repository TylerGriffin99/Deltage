import React from 'react'
import {connect} from 'react-redux'

import './login.css'
import {loginUser} from '../../actions/login'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    const {username, password} = this.state
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    this.props.loginUser(creds)
  }
  render () {
    const {username, password} = this.state
    return (
      <div className = 'login'>
        <input id='username' name='username' className='input' placeholder='username' onChange={this.handleChange} value={username}/>
        <input id='password' name='password' className='input' placeholder='password' onChange={this.handleChange} value={password}/>
        <button onClick = {this.handleClick}> Login </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: creds => {
      return dispatch(loginUser(creds))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
