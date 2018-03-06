/* eslint no-unused-vars: 0 */
const historyGraphData = {
  datasets: [
    {
      label: 'Value',
      type: 'line',
      fill: false,
      lineTension: 0.0,
      backgroundColor: 'rgba(51, 102, 204,0.4)',
      borderColor: 'rgba(51, 102, 204,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 1.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(51, 102, 204,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0.5,
      pointHoverRadius: 2,
      pointHoverBackgroundColor: 'rgba(51, 102, 204,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1.5,
      pointHitRadius: 10,
      yAxisID: 'y-axis-1',
      fontFamily:'Dosis'
    },
    {
      type: 'bar',
      label: 'Volume',
      data: [],
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
      yAxisID: 'y-axis-2',
      fontFamily:'Dosis'
    }
  ],
  options: {
    responsive: true,
    tooltips: {
      fontFamily: 'Dosis',
      mode: 'label',
      callbacks: {
        label: function (tooltipItem, data) {
          let label = data.datasets[tooltipItem.datasetIndex].label + ': '
          let number = tooltipItem.yLabel.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 5})
          return (tooltipItem.datasetIndex === 0)
            ? label + '$' + number
            : label + number
        }
      }
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      pointLabels:{
        fontFamily: 'Dosis'
      },

      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date/Time',
            fontFamily: 'Dosis'
          },
          display: true,
          gridLines: {
            display: false
          },
          labels: [],
          fontFamily: 'Dosis'
        }
      ],
      yAxes: [
        {
          type: 'linear',
          ticks: {
            fontFamily: 'Dosis',
            callback: (label, index, labels) => {
              return '$' + label.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 5})
            }
          },
          scaleLabel: {
            display: true,
            labelString: 'Price',
            fontFamily: 'Dosis'
          },
          display: true,
          position: 'left',
          id: 'y-axis-1',
          fontFamily: 'Dosis',
          gridLines: {
            linewidth: 2
          },
          labels: {
            fontFamily: 'Dosis',
            show: true
          }
        },
        {
          type: 'linear',
          ticks: {
            fontFamily: 'Dosis',
            callback: (label, index, labels) => {
              return label.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
            }
          },
          scaleLabel: {
            fontFamily: 'Dosis',
            display: true,
            labelString: 'Number of trades'
          },
          display: true,
          position: 'right',
          fontFamily: 'Dosis',
          id: 'y-axis-2',
          gridLines: {
            display: false
          },
          labels: {
            show: true,
            fontFamily: 'Dosis'
          }
        }
      ],
      legend: {
        labels: {
          fontFamily: 'Dosis'
        }
      }
    }
  }
}

export default historyGraphData
