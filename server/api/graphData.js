const graphData = {
  labels: [],
  datasets: [
    {
      label: 'BitTrex',
      fill: false,
      lineTension: 0.0,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 1.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0.5,
      pointHoverRadius: 2,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1.5,
      pointHitRadius: 10,
      data: []
    },
    {
      label: 'Poloniex',
      fill: false,
      lineTension: 0.0,
      backgroundColor: 'rgba(153,102,153,0.4)',
      borderColor: 'rgba(153,102,153,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 1.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(153,102,153,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0.5,
      pointHoverRadius: 2,
      pointHoverBackgroundColor: 'rgba(153,102,153,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1.5,
      pointHitRadius: 10,
      data: []
    },
    {
      label: 'Kraken',
      fill: false,
      lineTension: 0.0,
      backgroundColor: 'rgba(204,153,51,0.4)',
      borderColor: 'rgba(204,153,51,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 1.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(204,153,51,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0.5,
      pointHoverRadius: 2,
      pointHoverBackgroundColor: 'rgba(204,153,51,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1.5,
      pointHitRadius: 10,
      data: []
    }
  ],
  options: {
    scales: {
      pointLabels: {
        fontFamily: 'Dosis'
      },
      yAxes: [{
        ticks: {
          fontFamily: 'Dosis'
        }
      }],
      xAxes: [{
        ticks: {
          fontFamily: 'Dosis'
        }
      }]
    },
    legend: {
      labels: {
        fontFamily: 'Dosis'
      }
    }
  }
}

module.exports = graphData

// colour way for future line on the graph
// #cc3399 (204, 51, 153) pink
// #3366cc (51, 102, 204) blue
