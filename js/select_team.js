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
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Flamengo.png' height=120>";
	}
	else if(val=='Bot'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Botafogo.png' height=120>";
	}
	else if(val=='Vas'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/vasco.png' height=120>";
	}
	else if(val=='Flu'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/fluminense.png' height=120>";
	}
	else if(val=='Sp'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Sao Paulo.png' height=120>";
	}
	else if(val=='San'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Santos.png' height=120>";
	}
	else if(val=='Pal'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/palmeiras.png' height=120>";
	}
	else if(val=='Cor'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Corinthias.png' height=120>";
	}
	else if(val=='AtlMG'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Atletico Mineiro.png' height=120>";
	}
	else if(val=='Cru'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/cruzeiro.png' height=120>";
	}
	else if(val=='AltPR'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Atletico Paranaense.png' height=120>";
	}
	else if(val=='Gre'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Gremio.png' height=120>";
	}
	else if(val=='Int'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Internacional.png' height=120>";
	}
	else if(val=='Spo'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Sport.png' height=120>";
	}
	else if(val=='Cha'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Chapecoense.png' height=120>";
	}
	else if(val=='Bah'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Bahia.png' height=120>";
	}
	else if(val=='Vit'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Vitoria.png' height=120>";
	}
	else if(val=='AmeMG'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/america mg.png' height=120>";
	}
	else if(val=='Coritiba'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/coritiba.png' height=120>";
	}
	else if(val=='Fig'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/figueirense.png' height=120>";
	}
	else if(val=='Pon'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Ponte Preta.png' height=120>";
	}
	else if(val=='Sta'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Santa Cruz.png' height=120>";
	}
	else if(val=='Goi'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/brazilian_league/Goias.png' height=120>";
	}
	else{
		document.getElementById('escudoTime').innerHTML = "";
	}
}

function check2(){
	var val = document.getElementById('NtlTeams').value;
	if(val=='Arge'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/argentina.png' height=120>";
	}
	else if(val=='Belg'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/belgium.png' height=120>";
	}
	else if(val=='Braz'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/Brasil.png' height=120>";
	}
	else if(val=='Chil'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/chile.png' height=120>";
	}
	else if(val=='Chin'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/China.png' height=120>";
	}
	else if(val=='Colo'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/Colombia.png' height=120>";
	}
	else if(val=='Ecua'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/ecuador.png' height=120>";
	}
	else if(val=='Engl'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/england.png' height=120>";
	}
	else if(val=='Fran'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/France.png' height=120>";
	}
	else if(val=='Germ'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/Germany.png' height=120>";
	}
	else if(val=='Gree'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/greece.png' height=120>";
	}
	else if(val=='Ital'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/italy.png' height=120>";
	}
	else if(val=='Mexi'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/mexico.png' height=120>";
	}
	else if(val=='Neth'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/Netherlands.png' height=120>";
	}
	else if(val=='Para'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/paraguay.png' height=120>";
	}
	else if(val=='Port'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/portugal.png' height=120>";
	}
	else if(val=='Spai'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/spain.png' height=120>";
	}
	else if(val=='Swed'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/Sweden.png' height=120>";
	}
	else if(val=='Swit'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/Switzerland.png' height=120>";
	}
	else if(val=='USA'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/USA.png' height=120>";
	}
	else if(val=='Urua'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='Flags/Uruguay.png' height=120>";
	}
}