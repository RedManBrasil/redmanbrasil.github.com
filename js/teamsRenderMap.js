jQuery.noConflict();
    jQuery(function(){
      var $ = jQuery;
      $('#map1').vectorMap({
        map: 'world_mill_en',
        panOnDrag: true,
        onRegionClick: function (event, code) { //seleciona um pais e faz algo com isso
            $("#ShowCountryTeamsDiv").html(CreateTableTeamAPI(code)); //cria a tabela e coloca na div destacada pela id (o conteudo da funcao CreateTableTeamAPI esta em ../js/teamsContent.js)
            var newTableObject = document.getElementById('teams' + code +'TableContent'); 
            sorttable.makeSortable(newTableObject); //faz a tabela ser sorttable(junto com a linha de cima)
             $('html,body').animate({scrollTop: 450}, 500); //maneira alternativa de scroll sem o div
             //$("html, body").scrollTop($('#ShowCountryTeamsDiv').offset().top);  //scrol ate as info
             $("#BackBtn").hide(0); //essa call e mais as duas de baixo servem parap permitiqquer que vc saia do quadro das info detalhado apenas clicando em outro lugar no mapa mundi
             $("#StockInfoDisplay").hide(0);
             $("#ShowCountryTeamsDiv").show(0);
             TurnBtnForInfoAvaible(code); //funcao que permite clicar nas linha das tabelas e aparecer mais info sobre aquela acao // função TurnBtnForInfoAvaible() em teamsContent.js
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
    });