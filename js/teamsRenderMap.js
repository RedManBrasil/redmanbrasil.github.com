jQuery.noConflict();
    jQuery(function(){
      var $ = jQuery;
      $('#map1').vectorMap({
        map: 'world_mill_en',
        panOnDrag: true,
        onRegionClick: function (click, code) { //seleciona um pais e faz algo com isso
          if ( code == 'BR'){ //se o user clicar no brasil...
            $("#ShowCountryTeamsDiv").html(teamsBRDivContent); //seu conteudo esta na ../team.js
            var newTableObject = document.getElementById('teamsBRTableContent'); 
            sorttable.makeSortable(newTableObject); //faz a tabela ser sortable(junto com a linha de cima)
          }
          else if ( code == 'DE'){ //se o user clicar na alemanha...
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/germany_mini.png'></td><td>Germany's National Team</td><td>10.2Bi</td><td>$29.34</td><td>2%</td></tr></tbody></table>");
          }
          else if ( code == 'AR'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/argentina_mini.png'></td><td>Argentina's National Team</td><td>4.3Bi</td><td>$17.43</td><td>-5%</td></tr></tbody></table>");
          }
          else if ( code == 'BE'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/belgium_mini.png'></td><td>Belgium's National Team</td><td>7.0Bi</td><td>$24.42</td><td>3%</td></tr></tbody></table>");
          }
          else if ( code == 'CL'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/chile_mini.png'></td><td>Chile's National Team</td><td>5.5Bi</td><td>$20.40</td><td>12%</td></tr></tbody></table>");
          }
          else if ( code == 'CN'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/china_mini.png'></td><td>China's National Team</td><td>6.2Bi</td><td>$21.93</td><td>33%</td></tr></tbody></table>");
          }
          else if ( code == 'CO'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/colombia_mini.png'></td><td>Colombia's National Team</td><td>3.9Bi</td><td>$16.59</td><td>-1%</td></tr></tbody></table>");
          }
          else if ( code == 'EC'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/ecuador_mini.png'></td><td>Ecuador's National Team</td><td>2.1Bi</td><td>$14.75</td><td>10%</td></tr></tbody></table>");
          }
          else if ( code == 'FR'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/france_mini.png'></td><td>France's National Team</td><td>6.9Bi</td><td>$23.45</td><td>-9%</td></tr></tbody></table>");
          }
          else if ( code == 'GB'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/england_mini.png'></td><td>England's National Team</td><td>5.9Bi</td><td>$21.45</td><td>-12%</td></tr></tbody></table>");
          }
          else if ( code == 'GR'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/greece_mini.png'></td><td>Greece's National Team</td><td>3.8Bi</td><td>$16.23</td><td>2%</td></tr></tbody></table>");
          }
          else if ( code == 'IT'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/italy_mini.png'></td><td>Italy's National Team</td><td>6.1Bi</td><td>$20.45</td><td>1%</td></tr></tbody></table>");
          }
          else if ( code == 'MX'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/mexico_mini.png'></td><td>Mexico's National Team</td><td>4.7Bi</td><td>$18.19</td><td>-2%</td></tr></tbody></table>");
          }
          else if ( code == 'NL'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/netherlands_mini.png'></td><td>Netherlands's National Team</td><td>6.3Bi</td><td>$23.78</td><td>-15%</td></tr></tbody></table>");
          }
          else if ( code == 'PY'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/paraguay_mini.png'></td><td>Paraguay's National Team</td><td>2.5Bi</td><td>$12.23</td><td>-7%</td></tr></tbody></table>");
          }
          else if ( code == 'PT'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/portugal_mini.png'></td><td>Portugal's National Team</td><td>7.1Bi</td><td>$24.23</td><td>5%</td></tr></tbody></table>");
          }
          else if ( code == 'ES'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/spain_mini.png'></td><td>Spain's National Team</td><td>6.2Bi</td><td>$22.45</td><td>-10%</td></tr></tbody></table>");
          }
          else if ( code == 'SE'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/sweden_mini.png'></td><td>Sweden's National Team</td><td>4.3Bi</td><td>$17.35</td><td>-4%</td></tr></tbody></table>");
          }
          else if ( code == 'CH'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/switzerland_mini.png'></td><td>Switzerland's National Team</td><td>5.0Bi</td><td>$18.96.45</td><td>4%</td></tr></tbody></table>");
          }
          else if ( code == 'US'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/usa_mini.png'></td><td>USA's National Team</td><td>5.4Bi</td><td>$21.99</td><td>-1%</td></tr></tbody></table>");
          }
          else if ( code == 'UY'){
            $("#ShowCountryTeamsDiv").html("<table><thead><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr></thead><tbody><tr><td><img src='Flags/flags_mini/uruguay_mini.png'></td><td>Uruguay's National Team</td><td>5.9Bi</td><td>$25.45</td><td>12%</td></tr></tbody></table>");
          }
          else {
            return;}
              $('html,body').animate({scrollTop: 300}, 500); //maneira alternatica de scroll sem o div
             //$("html, body").scrollTop($('#ShowCountryTeamsDiv').offset().top);  //scrol ate as info
        },
        focusOn: {
          x: 0.5,
          y: 0.5,
          scale: 2,
          animate: true
        },
        series: {
          regions: [{
            scale: ['#b3ffaa', '#005421'], //a cor mais clara e a mais escura possivel
            normalizeFunction: 'polynomial',
            values: { //numero de times por país, contando com a seleção
              //todos os codigos dos paises http://jvectormap.com/maps/world/world/
              "AR": 1,
              "BE": 1,
              "BR": 24,
              "CL": 1,
              "CN": 1,
              "CO": 1,
              "EC": 1,
              "GB": 1,
              "FR": 1,
              "DE": 1,
              "GR": 1,
              "IT": 1,
              "MX": 1,
              "NL": 1,
              "PY": 1,
              "PT": 1,
              "ES": 1,
              "SE": 1,
              "CH": 1,
              "US": 1,
              "UY": 1
            }
          }]
        }
      });
    })