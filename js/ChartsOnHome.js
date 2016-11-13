      function getRandomInt(min, max) { //gera numero inteiro aleatorio
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function getRandomArbitrary(min, max) { //gera numero aleatorio
            return Math.random() * (max - min) + min;
        }

    var datapointsNetWorth = [getRandomInt(0, 300),
                              getRandomInt(0, 300),
                              getRandomInt(0, 300),
                              getRandomInt(0, 300),
                              getRandomInt(0, 300),
                              getRandomInt(0, 300),
                              getRandomInt(0, 300)];
    var configNetWorth = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Net Worth",
                    data: datapointsNetWorth,
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
                            suggestedMax: 300,
                        }
                    }]
                }
            }
        };

        //SEPARATION CHART 1(NetWorth) to CHART 2(NetWorth2)

            var datapointsNetWorth2 = [getRandomInt(0, 300),
                                       getRandomInt(0, 300),
                                       getRandomInt(0, 300),
                                       getRandomInt(0, 300),
                                       getRandomInt(0, 300),
                                       getRandomInt(0, 300),
                                       getRandomInt(0, 300)];
            var configNetWorth2 = {
            type: 'line',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                    label: "Net Worth",
                    data: datapointsNetWorth2,
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
                            suggestedMax: 300,
                        }
                    }]
                }
            }
        };


       //SEPARATION CHART 2(NetWorth2) to CHART 3(Donut)

    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    getRandomInt(0, 300),
                    getRandomInt(0, 300),
                    getRandomInt(0, 300),
                    getRandomInt(0, 300),
                    getRandomInt(0, 300),
                ],
                backgroundColor: [
                    "#F7464A",
                    "#62bb46",
                    "#355DDE",
                    "#ffd400",
                    "#855555",
                ],
            },
             ],
            labels: [
                "Flamengo",
                "Palmeiras",
                "Cruzeiro",
                "Brazil",
                "Vitória"
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'My Portfolio'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

    window.onload = function() {
        var ctx = document.getElementById("chart-area").getContext("2d");
        window.myDoughnut = new Chart(ctx, config);
    };


