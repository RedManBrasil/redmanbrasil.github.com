function CreateTableTeamAPI(code){
var headerDivContent = //header para conter o inicio da tabela que só aparece uma vez, por isso nao entra no for
			 "<table id='teams" + TeamsAPI[code][0]['code'] + "TableContent'>" +
			  "<thead>" +
				"<tr>" +
					"<th>/</th>" +
					"<th>Name</th>" +
					"<th>Team Value</th>" +
					"<th>Stock Value</th>" +
					"<th>Last 5 Games Change</th>" +
				"</tr>" +
			  "</thead>";

var bodiesDivContent = "";//necessario para nao aparecer undefined com o i=0, pois a variavel ainda estara vazia

	for(var i = 0; (TeamsAPI[code].length) > i; i++){ //for que vai criando a tabela para cada time da array
			if(TeamsAPI[code][i]['country'] == true)
				{var name = TeamsAPI[code][i]['name'] + "'s National Team";}
			else   //esse if/else complementa o nome quando o time é seleção
				{var name = TeamsAPI[code][i]['name'];}
	bodiesDivContent = bodiesDivContent + //o conteudo da array TeamAPI esta em .../js/teamsInfoAPI.js
				"<tr id='" + TeamsAPI[code][i]['name'] + "TableTD'>" +
					"<td><img src='escudos/escudos_mini/" + TeamsAPI[code][i]['code'] + "_mini.png'></td>" +
					"<td>" + name + "</td>"+
					"<td>" + TeamsAPI[code][i]['value'] + "Bi</td>" +
					"<td>$" + TeamsAPI[code][i]['stock'] + "</td>" +
					"<td>" + TeamsAPI[code][i]['last_5_games_change'] + "%</td>" +
				"</tr>";
	}
var fullDivContent = headerDivContent +
			"<tbody>" +
 				 bodiesDivContent +
				"</tbody>" +
			"</table>";

return fullDivContent;
}

$("#BackBtn").click(function(){
                  $("#BackBtn").hide(0);
                  $("#StockInfoDisplay").hide(0);
                  $("#MapaSpan").show(0);  
                  $("#ShowCountryTeamsDiv").show(0);
                  });

function TurnBtnForInfoAvaible(code){
	var length = (TeamsAPI[code].length)
				for(var i = 0; length > i; i++){
              $(document).on('click', '#' + TeamsAPI[code][i]['name'] + 'TableTD', function(){
              $("#BackBtn").show(0);
              $("#StockInfoDisplay").show(0);
              $("#MapaSpan").hide(0);  
              $("#ShowCountryTeamsDiv").hide(0);  
              $('html,body').scrollTop(0);   
		});
    }
}