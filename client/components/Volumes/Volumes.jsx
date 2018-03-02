import React from 'react'

class Volumes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>Coin Volume Graphs</h1>
        <br/>
        <h4>Bitcoin</h4>
          <p>Insert Graph Here</p>
        <br/>
        <h4>Ethereum</h4>
          <p>Insert Graph Here</p>
        <br/>
        <h4>Doge</h4>
          <p>Insert Graph Here</p>
        <br/>
        <h4>Pay</h4>
        <p>Insert Graph Here</p>
      </div>
      )
    }
  }
  
  export default Volumes