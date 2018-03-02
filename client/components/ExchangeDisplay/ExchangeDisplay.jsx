import React from 'react'

import './exchangeDisplay.css'

class ExchangeDisplay extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      result: ''
    }
    // // create a variable for new websocket
    // this.ws = new WebSocket('wss://api.bitfinex.com/ws/2')
    
    // // Create function to send on open
    // this.ws.onopen = function() {
    //   this.ws.send(JSON.stringify({"event":"subscribe", "channel":"ticker", "pair":"fUSD"}))
    // }
    // this.ws.onmessage = function(msg) {
    //   // create a variable for response and parse the json data
    //   var response = JSON.parse(msg.data)
    //   // save hb variable from bitfinex
    //   var hb = response[1]
    //   if(hb != "hb") {
    //     this.setState ({
    //       result: "ASK: " + response[1][2] + "  VOLUME: " + response[1][7] + "  BID: " + response[1][0]
    //     }) 
    //   }      
    // }
    // //bind ws.onmessage
    // this.ws.onmessage = this.ws.onmessage.bind(this)
    // this.ws.onopen = this.ws.onopen.bind(this)
  }


  
  render(){
    return(
        <div className = 'exchangeContainer'>
          <h1>Exchange Container</h1>
          <table className = 'exchangeTable'>
            <thead>
              <tr>
                <th> Diff (%)</th>
                <th> Buy (Exc)</th>
                <th> Sell (Exc)</th>
                <th> Coin </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  }

}

export default ExchangeDisplay