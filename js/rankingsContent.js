
function CreateTablePeopleRankingsAPI(){
var headerRankDivContent = //header para conter o início da tabela que só aparece uma vez, por isso não entra no for
			 "<table id='" + "PeopleRankings" + "TableContent'>" +
			  "<thead>" +
				"<tr>" +
					"<th>/</th>" +
					"<th>Name</th>" +
					"<th>Monthly Change</th>" +
					"<th>Net Worth</th>" +
					"<th>Firm</th>" +
				"</tr>" +
			  "</thead>";

var bodiesRankDivContent = ""; //necessário para nao aparecer undefined com o i=0, pois a variavel ainda estara vazia

	for(var i = 0; (RankingsPeopleAPI.length) > i; i++){ //for que vai criando a tabela para cada time da array
	bodiesRankDivContent = bodiesRankDivContent + //o conteudo da array RankingsPeopleAPI esta em .../js/RankingsAPItest.js
				"<tr id='" + RankingsPeopleAPI[i]["id"] + "RankingsTableTD'>" +
					"<td><img src='escudos/escudos_mini/" + RankingsPeopleAPI[i]["countrycode"] + "_mini.png'></td>" +
					"<td>" + RankingsPeopleAPI[i]["name"] + "</td>"+
					"<td>" + RankingsPeopleAPI[i]["monthchange"] + "%</td>" +
					"<td>" + RankingsPeopleAPI[i]["networth"] + " dollars</td>" +
					"<td>" + RankingsPeopleAPI[i]["firmname"] + "</td>" +
				"</tr>";
	}
var fullRankDivContent = headerRankDivContent +
			"<tbody>" +
 				 bodiesRankDivContent +
				"</tbody>" +
			"</table>";

return fullRankDivContent;
}


function CreateTableFirmRankingsAPI(){
var headerRankDivContent = //header para conter o início da tabela que só aparece uma vez, por isso não entra no for
			 "<table id='" + "FirmRankings" + "TableContent'>" +
			  "<thead>" +
				"<tr>" +
					"<th>/</th>" +
					"<th>Name</th>" +
					"<th>Monthly Change</th>" +
					"<th>Net Worth</th>" +
				"</tr>" +
			  "</thead>";

var bodiesRankDivContent = ""; //necessário para nao aparecer undefined com o i=0, pois a variavel ainda estara vazia

	for(var i = 0; (RankingsFirmAPI.length) > i; i++){ //for que vai criando a tabela para cada time da array
	bodiesRankDivContent = bodiesRankDivContent + //o conteudo da array RankingsFirmAPI esta em .../js/RankingsAPItest.js
				"<tr id='" + RankingsFirmAPI[i]["id"] + "RankingsTableTD'>" +
					"<td><img src='escudos/escudos_mini/" + RankingsFirmAPI[i]["countrycode"] + "_mini.png'></td>" +
					"<td>" + RankingsFirmAPI[i]["name"] + "</td>"+
					"<td>" + RankingsFirmAPI[i]["monthchange"] + "%</td>" +
					"<td>" + RankingsFirmAPI[i]["networth"] + " dollars</td>" +
				"</tr>";
	}
var fullRankDivContent = headerRankDivContent +
			"<tbody>" +
 				 bodiesRankDivContent +
				"</tbody>" +
			"</table>";

return fullRankDivContent;
}