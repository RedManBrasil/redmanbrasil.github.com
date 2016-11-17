var headerDivContent = //header para conter o inicio da tabela que só aparece uma vez, por isso nao entra no for
			 "<table id='teamsBRTableContent'>" +
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

	for(var i = 0; (TeamsAPI['BR'].length) > i; i++){ //for que vai criando a tabela para cada time da array
	bodiesDivContent = bodiesDivContent +
				"<tr id='" + TeamsAPI['BR'][i]['name'] + "TableTD'>" +
					"<td><img src='escudos/escudos_mini/" + TeamsAPI['BR'][i]['code'] + "_mini.png'></td>" +
					"<td>" + TeamsAPI['BR'][i]['name'] + "</td>"+
					"<td>" + TeamsAPI['BR'][i]['value'] + "Bi</td>" +
					"<td>$" + TeamsAPI['BR'][i]['stock'] + "</td>" +
					"<td>" + TeamsAPI['BR'][i]['last_5_games_change'] + "%</td>" +
				"</tr>";
	}


 var bodyDivContent = "<tbody>" +
 				 bodiesDivContent +
				"</table>" +
			"</table>";