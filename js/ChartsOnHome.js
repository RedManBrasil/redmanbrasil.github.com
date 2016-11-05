      function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
      Chart.defaults.global.tooltips.custom = function(tooltip) {

      // Tooltip Element
      var tooltipEl = $('#chartjs-tooltip');

      // Hide if no tooltip
      if (!tooltip.opacity) {
        tooltipEl.css({
          opacity: 0
        });
        $('.chartjs-wrap canvas')
          .each(function(index, el) {
            $(el).css('cursor', 'default');
          });
        return;
      }

      $(this._chart.canvas).css('cursor', 'pointer');

      // Set caret Position
      tooltipEl.removeClass('above below no-transform');
      if (tooltip.yAlign) {
        tooltipEl.addClass(tooltip.yAlign);
      } else {
        tooltipEl.addClass('no-transform');
      }

      // Set Text
      if (tooltip.body) {
        var innerHtml = [
          (tooltip.beforeTitle || []).join('\n'), (tooltip.title || []).join('\n'), (tooltip.afterTitle || []).join('\n'), (tooltip.beforeBody || []).join('\n'), (tooltip.body || []).join('\n'), (tooltip.afterBody || []).join('\n'), (tooltip.beforeFooter || [])
          .join('\n'), (tooltip.footer || []).join('\n'), (tooltip.afterFooter || []).join('\n')
        ];
        tooltipEl.html(innerHtml.join('\n'));
      }

      // Find Y Location on page
      var top = 0;
      if (tooltip.yAlign) {
        if (tooltip.yAlign == 'above') {
          top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding;
        } else {
          top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding;
        }
      }

      var position = $(this._chart.canvas)[0].getBoundingClientRect();

      // Display, position, and set styles for font
      tooltipEl.css({
        opacity: 1,
        width: tooltip.width ? (tooltip.width + 'px') : 'auto',
        left: position.left + tooltip.x + 'px',
        top: position.top + top + 'px',
        fontFamily: tooltip._fontFamily,
        fontSize: tooltip.fontSize,
        fontStyle: tooltip._fontStyle,
        padding: tooltip.yPadding + 'px ' + tooltip.xPadding + 'px',
      });
    };

    var ChartData=new Array();  
    for (var n = 0; n != 6; ++n){ 
   ChartData[n] = getRandomArbitrary(0, 100);}
    var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [ChartData[0], ChartData[1], ChartData[2], ChartData[3], ChartData[4]],
                backgroundColor: [
                    "#F7464A",
                    "#9DEDAB",
                    "#355DDE",
                    "#F2E63A",
                    "#855555",
                ],
            }],
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
                display: false
            },
            tooltips: {
                enabled: true,
            }
        }
    };

//SEPARATION CHART 1 to CHART 2

        var datapointsNetWorth = [ChartData[0], ChartData[1], ChartData[2], ChartData[3], ChartData[4], ChartData[5]];
    var configNetWorth = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
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
                title:{
                    display:false,
                    text:'Chart.js Line Chart - Cubic interpolation mode'
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
                            suggestedMax: 100,
                        }
                    }]
                }
            }
        };

