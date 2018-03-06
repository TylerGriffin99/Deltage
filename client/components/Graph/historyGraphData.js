/* eslint no-unused-vars: 0 */
const historyGraphData = {
  datasets: [
    {
      label: 'Value',
      type: 'line',
      data: [],
      fill: false,
      borderColor: '#3366CC',
      backgroundColor: '#3366CC',
      pointBorderColor: '#3366CC',
      pointBackgroundColor: '#3366CC',
      pointHoverBackgroundColor: '#3366CC',
      pointHoverBorderColor: '#3366CC',
      yAxisID: 'y-axis-1'
    },
    {
      type: 'bar',
      label: 'Volume',
      data: [],
      fill: false,
      backgroundColor: '#4BC0C0',
      borderColor: '#4BC0C0',
      hoverBackgroundColor: '#4BC0C0',
      hoverBorderColor: '#4BC0C0',
      yAxisID: 'y-axis-2'
    }
  ],
  options: {
    responsive: true,
    tooltips: {
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
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date/Time'
          },
          display: true,
          gridLines: {
            display: false
          },
          labels: []
        }
      ],
      yAxes: [
        {
          type: 'linear',
          ticks: {
            callback: (label, index, labels) => {
              return '$' + label.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 5})
            }
          },
          scaleLabel: {
            display: true,
            labelString: 'Price'
          },
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            linewidth: 2
          },
          labels: {
            show: true
          }
        },
        {
          type: 'linear',
          ticks: {
            callback: (label, index, labels) => {
              return label.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
            }
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of trades'
          },
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        }
      ]
    },
    legend: {
      onClick: function (event, legendItem) {
        const index = legendItem.datasetIndex
        const myChart = this.chart
        const meta = myChart.getDatasetMeta(index)
        meta.hidden = meta.hidden === null ? !myChart.data.datasets[index].hidden : null
        myChart.options.scales.yAxes[index].display = !myChart.options.scales.yAxes[index].display
        myChart.update()
      }
    }
  }
}

export default historyGraphData
