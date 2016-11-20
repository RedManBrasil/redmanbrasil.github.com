      function getRandomInt(min, max) { //gera numero inteiro aleatorio
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function getRandomArbitrary(min, max) { //gera numero aleatorio
            return Math.random() * (max - min) + min;
        }

    var datapointsStockInfo = [
                                      getRandomInt(0, 30),
                                      getRandomInt(0, 30),
                                      getRandomInt(0, 30),
                                      getRandomInt(0, 30),
                                      getRandomInt(0, 30),
                                      getRandomInt(0, 30),
                                      TeamsAPI['BR'][0]['stock']
                              ];
    var configStockInfo = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Net Worth Semester",
                    data: datapointsStockInfo,
                    borderColor: 'rgba(255, 0, 0, 0.7)',
          backgroundColor: 'rgba(0, 0, 0, 0)',
                    fill: false,
          cubicInterpolationMode: 'monotone'
                },  ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title:{
                    display:false,
                },
                legend: {
                display: false,
                },
                tooltips: {
                    mode: 'label'
                },
                hover: {
                    mode: 'dataset'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value(Dollars)'
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 30,
                        }
                    }]
                }
            }
        };
