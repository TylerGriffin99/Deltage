import React from 'react'

class LiveApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      coin_prices: {},
      numberOfRequests: 0,
      results: []
    }
  }

  componentDidMount () {
    // getPoloniexData()
    //   .then((coin_prices) => {
    //     this.setState({
    //       coin_prices
    //     })
    //   })
    // // result.then(() => {})
  }

  render () {
    return (
      <div>
       <p>test</p>
      </div>
    )
  }
}

export default LiveApp