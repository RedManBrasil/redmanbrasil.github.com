
function CreateTableRankingsAPI(){
var headerRankDivContent = //header para conter o início da tabela que só aparece uma vez, por isso não entra no for
			 "<table id='" + "Rankings" + "TableContent'>" +
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

	for(var i = 0; (RankingsAPI.length) > i; i++){ //for que vai criando a tabela para cada time da array
	bodiesRankDivContent = bodiesRankDivContent + //o conteudo da array RankingsAPI esta em .../js/RankingsAPItest.js
				"<tr id='" + RankingsAPI[i]["id"] + "RankingsTableTD'>" +
					"<td><img src='escudos/escudos_mini/" + RankingsAPI[i]["countrycode"] + "_mini.png'></td>" +
					"<td>" + RankingsAPI[i]["name"] + "</td>"+
					"<td>" + RankingsAPI[i]["monthchange"] + "%</td>" +
					"<td>" + RankingsAPI[i]["networth"] + " dollars</td>" +
					"<td>" + RankingsAPI[i]["firmname"] + "</td>" +
				"</tr>";
	}
var fullRankDivContent = headerRankDivContent +
			"<tbody>" +
 				 bodiesRankDivContent +
				"</tbody>" +
			"</table>";

return fullRankDivContent;
}
