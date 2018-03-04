import React from 'react'
import {connect} from 'react-redux'

import './loading.css'

class Loading extends React.Component {
  render () {
    return (
      <img className="loader" src="./images/loaderBlack.png" alt=""/>
    )
  }
}

function mapStateToProps (state) {
  return {
    Loading: state
  }
}

export default connect(mapStateToProps)(Loading)
