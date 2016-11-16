jQuery.noConflict();
    jQuery(function(){
      var $ = jQuery;
      $('#map1').vectorMap({
        map: 'world_mill_en',
        panOnDrag: true,
        onRegionClick: function (event, code) { //seleciona um pais e faz algo com isso
          if ( code == 'BR'){ //se o user clicar no brasil...
            $("#ShowCountryTeamsDiv").html(headerDivContent + bodyDivContent); //seu conteudo esta na ../team.js
            var newTableObject = document.getElementById('teamsBRTableContent'); 
 -            sorttable.makeSortable(newTableObject); //faz a tabela ser sorttable(junto com a linha de cima)
          $('html,body').animate({scrollTop: 300}, 500);
          }
          else if ( code !== 1){ //cria a tabela segundo o país que o user clica
            $("#ShowCountryTeamsDiv").html(
                              "<table>" +
                                "<thead>" +
                                    "<tr>" +
                                       "<th>/</th>"+
                                       "<th>Name</th>" + 
                                       "<th>Team Value</th>" +
                                       "<th>Stock Value</th>" + 
                                       "<th>Last 5 Games Change</th>" +
                                    "</tr>" +
                                "</thead>" +
                                "<tbody>" +
                                    "<tr>" +
                                       "<td><img src='escudos/escudos_mini/"+ code +"_mini.png'></td>" +
                                       "<td>"+ CountryArrayAPI[code]['name'] + "</td>" +
                                       "<td>" + CountryArrayAPI[code]['value'] + "Bi" +"</td>" + 
                                       "<td>$" + CountryArrayAPI[code]['stock'] + "</td>" +
                                       "<td>" + CountryArrayAPI[code]['last_5_games_change'] + "%</td>" +
                                    "</tr>" +
                                "</tbody>" +
                               "</table>"
            );
             $('html,body').animate({scrollTop: 300}, 500); //maneira alternatica de scroll sem o div
             //$("html, body").scrollTop($('#ShowCountryTeamsDiv').offset().top);  //scrol ate as info
          }
          else {
            return;}
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