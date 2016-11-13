      function getRandomInt(min, max) { //gera numero inteiro aleatorio
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function getRandomArbitrary(min, max) { //gera numero aleatorio
            return Math.random() * (max - min) + min;
        }

    var datapointsNetWorthSemester = [getRandomInt(0, 300),
                                      getRandomInt(0, 300),
                                      getRandomInt(0, 300),
                                      getRandomInt(0, 300),
                                      getRandomInt(0, 300),
                                      getRandomInt(0, 300),
                                      getRandomInt(0, 300)];
    var configNetWorthSemester = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Net Worth Semester",
                    data: datapointsNetWorthSemester,
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

        //SEPARATION CHART 1(NetWorthSemester) to CHART 2(NetWorthWeek)

            var datapointsNetWorthWeek = [getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300)];
            var configNetWorthWeek = {
            type: 'line',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                    label: "Net Worth",
                    data: datapointsNetWorthWeek,
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
        //SEPARATION CHART 2(NetWorthWeek) to CHART 3(NetWorthToday)

            var datapointsNetWorthToday = [getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300)];
            var configNetWorthToday = {
            type: 'line',
            data: {
                labels: ["00:00", "04:00", "08:00", "12;00", "16:00", "20:00", "24:00"],
                datasets: [{
                    label: "Net Worth",
                    data: datapointsNetWorthToday,
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


//SEPARATION CHART 3(NetWorthToday) to CHART 4(NetWorthYear)

            var datapointsNetWorthYear = [getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300),
                                          getRandomInt(0, 300)];
            var configNetWorthYear = {
            type: 'line',
            data: {
                labels: ["January",
                         "February",
                          "March",
                          "April",
                           "May",
                           "June",
                           "July",
                           "August",
                           "September",
                           "October",
                           "November",
                           "December"],
                datasets: [{
                    label: "Net Worth",
                    data: datapointsNetWorthYear,
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


       //SEPARATION CHART 4(NetWorthYear) to CHART 5(Donut)

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


