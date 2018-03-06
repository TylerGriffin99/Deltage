import React from 'react'
import {connect} from 'react-redux'

import './graphLoading.css'

class GraphLoading extends React.Component {
  render () {
    return (
      <div>
        <div className='container'>
          <img className="graph-loader" src="./images/loaderBlack.png" alt=""/>
          <h2>Retrieving Graph ...</h2>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    GraphLoading: state
  }
}

export default connect(mapStateToProps)(GraphLoading)