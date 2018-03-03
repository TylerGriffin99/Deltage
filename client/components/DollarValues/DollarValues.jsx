import React from 'react'

import './dollarValues.css'

class DollarValues extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <h1>Dollar Value Component</h1>
        <br/>
        <h4>Bitcoin</h4><h4>$10,408.60</h4>
        <br/>
        <h4>Ethereum</h4><h4>$859.06</h4>
        <br/>
        <h4>Tether</h4><h4>$1.00</h4>
        <br/>
        <h4>DogeCoin</h4><h4>$0.006048</h4>
      </div>
    )
  }
}

export default DollarValues
