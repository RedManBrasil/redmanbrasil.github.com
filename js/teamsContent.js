function getRandomInt(min, max) { //gera numero inteiro aleatorio
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }

function CreateTableTeamAPI(code){
var headerDivContent = //header para conter o início da tabela que só aparece uma vez, por isso não entra no for
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
				"<tr id='" + TeamsAPI[code][i]['code'] + "TableTD'>" +
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

$(document).ready(function(){
$("#BackBtn").click(function(){
                  $("#BackBtn").hide(0);
			      $("#StockInfoDisplay").hide(0);
			      $("#ShowCountryTeamsDiv").show(0);
                  });
 			});


function TurnBtnForInfoAvaible(code){
	var length = (TeamsAPI[code].length)
				for(var i = 0; length > i; i++){
			  $('#' + TeamsAPI[code][i]['code'] + 'TableTD').click(function ShowStockInfo(){
			  $("#BackBtn").show(0);
              $("#StockInfoDisplay").show(0);
              $("#ShowCountryTeamsDiv").hide(0);  
			  var idTR = $(this).closest('tr').attr('id'); //da a id do <tr> do time clicado
              var partidTR = idTR.replace('TableTD','');  //da o nome do time clicado
              var n = 0;
              while(partidTR != TeamsAPI[code][n]['code']){
              	n++;   //n é o id pessoal de cada time dentro do seu país (um número)
              }
			  $("#StockInfoDisplay").html(
			  	"<img src='escudos/"+ TeamsAPI[code][0]['name'] + "/"+ partidTR +".png'" + "style='margin:25px;max-width:20%;max-height:20%;float:left;'>" +
			  	"<span style='float:left;margin:25px;font-size:82px;'>" + TeamsAPI[code][n]['name'] + "</span>" +
			  	"<br clear='all' /><br>" +
			  	"<span style='margin:25px;font-size:52px;clear:left;'>Team Value: " + TeamsAPI[code][n]['value'] + " Billion Dollars</span>" +
			  	"<br><br>" +
			  	"<span style='margin:25px;font-size:52px;clear:left;'>Stock Value: $" + TeamsAPI[code][n]['stock'] + " Dollars</span>" +
			  	"<button style='float:right;margin:30px;font-size:25px;'>BUY</button>" +
			  	"<button style='float:right;margin:30px;font-size:25px;'>SELL</button>" +
			  	"<div id='StockInfoChartGraph' style='margin:20px;'><canvas id='canvasStockInfo' height='305%'></canvas></div>"
			  	);
			 	var ctxStockInfo = document.getElementById("canvasStockInfo").getContext("2d");
			 	datapointsStockInfo[6] = TeamsAPI[code][n]['stock'];    //altera o valor da ultima datapoint (array original em teams.js)
              	myLine = new Chart(ctxStockInfo, configStockInfo);
              	$('html,body').animate({scrollTop: 820}, 500);
			  });
          }
    }