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
	bodiesDivContent = bodiesDivContent + //o conteudo da array TeamAPI esta em .../js/teamsInfoAPI.js
				"<tr id='" + TeamsAPI[code][i]['name'] + "TableTD'>" +
					"<td><img src='escudos/escudos_mini/" + TeamsAPI[code][i]['code'] + "_mini.png'></td>" +
					"<td>" + TeamsAPI[code][i]['name'] + "</td>"+
					"<td>" + TeamsAPI[code][i]['value'] + "Bi</td>" +
					"<td>$" + TeamsAPI[code][i]['stock'] + "</td>" +
					"<td>" + TeamsAPI[code][i]['last_5_games_change'] + "%</td>" +
				"</tr>";
	}
var fullDivContent = headerDivContent +
			"<tbody>" +
 				 bodiesDivContent +
				"</table>" +
			"</table>";

return fullDivContent;
}