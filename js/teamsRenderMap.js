jQuery.noConflict();
    jQuery(function(){
      var $ = jQuery;
      $('#map1').vectorMap({
        map: 'world_mill_en',
        panOnDrag: true,
        onRegionClick: function (click, code) { //seleciona um pais e faz algo com isso
          if ( code == 'BR'){ //se o user clicar no brasil...
            $("#ShowCountryTeamsDiv").html("<img src='Flags/Brasil.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>Brazilian Teams: 24</h2>");
          }
          else if ( code == 'DE'){ //se o user clicar na alemanha...
            $("#ShowCountryTeamsDiv").html("<img src='Flags/Germany.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>German Teams: 1</h2>");
          }
          else if ( code == 'AR'){
            $("#ShowCountryTeamsDiv").html("<table><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr><tr><td><img src='flags_mini/argentina_mini.png'></td><td>Argentina National Team</td><td>4.3Bi</td><td>$17.43</td><td>-5%</td></tr></table>");
          }
          else if ( code == 'BE'){
            $("#ShowCountryTeamsDiv").html("<table><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr><tr><td><img src='flags_mini/belgium_mini.png'></td><td>Belgium National Team</td><td>6.9 Bi</td><td>$24.42</td><td>3%</td></tr></table>");
          }
          else if ( code == 'CL'){
            $("#ShowCountryTeamsDiv").html("<table><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr><tr><td><img src='flags_mini/chile_mini.png'></td><td>Chile National Team</td><td>5.5 Bi</td><td>$20.40</td><td>12%</td></tr></table>");
          }
          else if ( code == 'CN'){
            $("#ShowCountryTeamsDiv").html("<table><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr><tr><td><img src='flags_mini/china_mini.png'></td><td>China National Team</td><td>6.2Bi</td><td>$21.93</td><td>33%</td></tr></table>");
          }
          else if ( code == 'CO'){
            $("#ShowCountryTeamsDiv").html("<table><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr><tr><td><img src='flags_mini/colombia_mini.png'></td><td>Colombia National Team</td><td>3.9 Bi</td><td>$16.59</td><td>-1%</td></tr></table>");
          }
          else if ( code == 'EC'){
            $("#ShowCountryTeamsDiv").html("<table><tr><th>/</th><th>Name</th><th>Team Value</th><th>Stock Value</th><th>Last 5 Games Change</th></tr><tr><td><img src='flags_mini/ecuador_mini.png'></td><td>Ecuador National Team</td><td>2.1 Bi</td><td>$14.75</td><td>10%</td></tr></table>");
          }
          else if ( code == 'FR'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/France.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>French Teams: 1</h2>");
          }
          else if ( code == 'GB'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/UK.png' style='margin:25px;float:left;width:28%;'> <h2 style='color:black;float:left;margin:25px;'>British Teams: 1</h2>");
          }
          else if ( code == 'GR'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/greece.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>Greek Teams: 1</h2>");
          }
          else if ( code == 'IT'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/italy.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>Italian Teams: 1</h2>");
          }
          else if ( code == 'MX'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/mexico.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>Mexican Teams: 1</h2>");
          }
          else if ( code == 'NL'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/Netherlands.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>Dutch Teams: 1</h2>");
          }
          else if ( code == 'PY'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/paraguay.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>Paraguayan Teams: 1</h2>");
          }
          else if ( code == 'PT'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/portugal.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>Portuguese Teams: 1</h2>");
          }
          else if ( code == 'ES'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/spain.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>Spanish Teams: 1</h2>");
          }
          else if ( code == 'SE'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/Sweden.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>Swedish Teams: 1</h2>");
          }
          else if ( code == 'CH'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/Switzerland.png' style='margin:25px;float:left;width:15%;'> <h2 style='color:black;float:left;margin:25px;'>Swiss Teams: 1</h2>");
          }
          else if ( code == 'US'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/USA.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>American Teams: 1</h2>");
          }
          else if ( code == 'UY'){
            $("#ShowCountryTeamsDiv").html("<img src='Flags/Uruguay.png' style='margin:25px;float:left;width:25%;'> <h2 style='color:black;float:left;margin:25px;'>Uruguayan Teams: 1</h2>");
          }
          else {
            return;}
              $('html,body').animate({scrollTop: 240}, 1000); //maneira alternatica de scroll sem o div
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