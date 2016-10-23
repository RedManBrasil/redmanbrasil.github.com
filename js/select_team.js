function check1(){
	var val = document.getElementById('LeagueList').value;
	if(val=="BrLeague"){
		$(function () {
     $('#FavBRTeam').removeClass('hidden');
 });
	}
}



function check(){
	var val = document.getElementById('TeamBRList').value;
	if(val=='Fla'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Flamengo.png' height=120>";
	}
	else if(val=='Bot'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Botafogo.png' height=120>";
	}
	else if(val=='Vas'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/vasco.png' height=120>";
	}
	else if(val=='Flu'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/fluminense.png' height=120>";
	}
	else if(val=='Sp'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Sao Paulo.png' height=120>";
	}
	else if(val=='San'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Santos.png' height=120>";
	}
	else if(val=='Pal'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/palmeiras.png' height=120>";
	}
	else if(val=='Cor'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Corinthias.png' height=120>";
	}
	else if(val=='AtlMG'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Atletico Mineiro.png' height=120>";
	}
	else if(val=='Cru'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/cruzeiro.png' height=120>";
	}
	else if(val=='AltPR'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Atletico Paranaense.png' height=120>";
	}
	else if(val=='Gre'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Gremio.png' height=120>";
	}
	else if(val=='Int'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Internacional.png' height=120>";
	}
	else if(val=='Spo'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Sport.png' height=120>";
	}
	else if(val=='Cha'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Chapecoense.png' height=120>";
	}
	else if(val=='Bah'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Bahia.png' height=120>";
	}
	else if(val=='Vit'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Vitoria.png' height=120>";
	}
	else if(val=='AmeMG'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/america mg.png' height=120>";
	}
	else if(val=='Coritiba'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/coritiba.png' height=120>";
	}
	else if(val=='Fig'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/figueirense.png' height=120>";
	}
	else if(val=='Pon'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Ponte Preta.png' height=120>";
	}
	else if(val=='Sta'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Santa Cruz.png' height=120>";
	}
	else if(val=='Goi'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Goias.png' height=120>";
	}
	else{
		document.getElementById('escudoTime').innerHTML = "";
	}

}