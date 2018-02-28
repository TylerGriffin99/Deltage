import React from 'react'


class ExchangeDisplay extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
        <div className = 'exchangeContainer'>
          <h1>This is the Exchange Container</h1>
          <table>
            <thead>
              <tr>
                <th>Buy</th>
                <th>Sell</th>
                <th>Diff %</th>
                <th>Profitable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> </td>
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

export default App