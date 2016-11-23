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
              var volume = stockvalue * 11302; //volume fictício apenas para teste
              volume = volume.toFixed(2); //essa funcao toFixed() faz com que apenas seja exibido duas casa decimais
			  $("#headerInfo").html(
			  	"<img src='escudos/"+ TeamsAPI[code][0]['name'] + "/"+ partidTR +".png'" + "style='margin:4% 0 0 4%;max-width:20%;max-height:20%;vertical-align:middle;display:inline-block;'>" +
			  	"<span style='margin:4% 0 0 4%;font-size:600%;vertical-align: middle;display:inline-block;'>" + TeamsAPI[code][n]['name'] + "</span>" +
			  	"<br clear='all' /><br>" );
			  document.getElementById('ValueStockInfoDisplay').innerHTML = TeamsAPI[code][n]['value'];
			  document.getElementById('VolumeStockInfoDisplay').innerHTML = volume;
			  document.getElementById('5ChangeStockInfoDisplay').innerHTML = TeamsAPI[code][n]['last_5_games_change'];
			  document.getElementById('StockStockInfoDisplay').innerHTML = stockvalue;
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