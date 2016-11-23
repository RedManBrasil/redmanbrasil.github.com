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
              var stockvalue = TeamsAPI[code][n]['stock']; //valor da acao do time puxada da API
			  stockvalue = parseFloat(stockvalue); //transforma em float para as operacções matemáticas a seguir
              var volume = stockvalue * 11302; //volume fictício
			  $("#StockInfoDisplay").html(
			  	"<img src='escudos/"+ TeamsAPI[code][0]['name'] + "/"+ partidTR +".png'" + "style='margin:4% 0 0 4%;max-width:20%;max-height:20%;float:left;'>" +
			  	"<span style='float:left;margin:4% 0 0 4%;font-size:600%;'>" + TeamsAPI[code][n]['name'] + "</span>" +
			  	"<br clear='all' /><br>" +
			  	"<span style='margin:4%;font-size:350%;clear:left;'>Team Value: " + TeamsAPI[code][n]['value'] + " Billion Dollars</span>" +
			  	"<br><br>" +
			  	"<span style='margin:4%;font-size:350%;clear:left;'>Daily Volume: " + volume.toFixed(2) + " dollars</span>" +
			  	"<br><br>" +
			  	"<span style='margin:4%;font-size:350%;clear:left;'>Last 5 Games Change: " + TeamsAPI[code][n]['last_5_games_change'] + "%</span>" +
			  	"<br><br>" +
			  	"<span style='margin:4%;font-size:350%;clear:left;'>Stock Value: $" + TeamsAPI[code][n]['stock'] + " Dollars</span>" +
			  	"<button style='float:right;margin:3% 3% 3% 1%;font-size:150%;color:white;background-color:#0aa046;padding:0.5%;'>BUY</button>" +
			  	"<button style='float:right;margin:3% 1% 3% 3%;font-size:150%;color:white;background-color:#dd5056;padding:0.5%;'>SELL</button>" +
			  	"<div id='StockInfoChartGraph' style='margin:2.5%;'><canvas id='canvasStockInfo' height='305%'></canvas></div>"
			  	);
			 	var ctxStockInfo = document.getElementById("canvasStockInfo").getContext("2d");
			 	datapointsStockInfo[0] = stockvalue + 8.09;
			 	datapointsStockInfo[1] = stockvalue - 1.43;
			 	datapointsStockInfo[2] = stockvalue - 4.97;
			 	datapointsStockInfo[3] = stockvalue + 7.79;
			 	datapointsStockInfo[4] = stockvalue - 0.87;
			 	datapointsStockInfo[5] = stockvalue - 3.33;
			 	datapointsStockInfo[6] = stockvalue;    //altera o valor da ultima datapoint para o atual valor da stock (array original em teams.js)
              	myLine = new Chart(ctxStockInfo, configStockInfo);
              	$('html,body').animate({scrollTop: 820}, 500);
			  });
          }
    }