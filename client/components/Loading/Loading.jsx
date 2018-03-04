import React from 'react'
import {connect} from 'react-redux'

import './loading.css'

class Loading extends React.Component {
  render () {
    return (
      <div className='container'>
        <img className="loader" src="./images/loaderBlack.png" alt=""/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    Loading: state
  }
}

export default connect(mapStateToProps)(Loading)
