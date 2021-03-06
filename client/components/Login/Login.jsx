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
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    const {username, password} = this.state
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    const goToLiveApp = () => this.props.history.push('/LiveApp')
    this.props.loginUser(creds, goToLiveApp)
  }

  handleKeyUp (e) {
    if (e.keyCode === 13) {
      this.handleClick()
    }
  }

  render () {
    const {username, password} = this.state
    return (
      <div className='login' onKeyUp={this.handleKeyUp}>
        <img src='./images/deltageBlackName.png' alt="" />
        <br />
        <p>To login please use Username: deltage Password: delta</p>
        <input id='username' name='username' className='input noSelect'
          placeholder='Username' onChange={this.handleChange}
          autoComplete='off' value={username} />
        <input id='password' name='password' className='input'
          placeholder='Password' type='password' onChange={this.handleChange}
          autoComplete='off' value={password} />
        <br />
        <button className='loginButton' onClick={this.handleClick}> Login </button>
        <p className='failed'>{this.props.failed}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    failed: state.auth.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (creds, onSuccess) => {
      return dispatch(loginUser(creds, onSuccess))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
