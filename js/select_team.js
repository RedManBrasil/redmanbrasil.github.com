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
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/flamengo.png' height=120>";
	}
	else if(val=='Bot'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/botafogo.png' height=120>";
	}
	else if(val=='Vas'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/vasco.png' height=120>";
	}
	else if(val=='Flu'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/fluminense.png' height=120>";
	}
	else if(val=='Sp'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/sao_paulo.png' height=120>";
	}
	else if(val=='San'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/santos.png' height=120>";
	}
	else if(val=='Pal'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/palmeiras.png' height=120>";
	}
	else if(val=='Cor'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/corinthias.png' height=120>";
	}
	else if(val=='AtlMG'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/atletico_mineiro.png' height=120>";
	}
	else if(val=='Cru'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/cruzeiro.png' height=120>";
	}
	else if(val=='AltPR'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/atletico_paranaense.png' height=120>";
	}
	else if(val=='Gre'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/gremio.png' height=120>";
	}
	else if(val=='Int'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/internacional.png' height=120>";
	}
	else if(val=='Spo'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/sport.png' height=120>";
	}
	else if(val=='Cha'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/chapecoense.png' height=120>";
	}
	else if(val=='Bah'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/bahia.png' height=120>";
	}
	else if(val=='Vit'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/vitoria.png' height=120>";
	}
	else if(val=='AmeMG'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/america_mineiro.png' height=120>";
	}
	else if(val=='Coritiba'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/coritiba.png' height=120>";
	}
	else if(val=='Fig'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/figueirense.png' height=120>";
	}
	else if(val=='Pon'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/ponte_preta.png' height=120>";
	}
	else if(val=='Sta'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/santa_cruz.png' height=120>";
	}
	else if(val=='Goi'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Brazil/goias.png' height=120>";
	}
	else{
		document.getElementById('escudoTime').innerHTML = "";
	}
}

function check2(){
	var val = document.getElementById('NtlTeams').value;
	if(val=='Arge'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Argentina/AR.png' height=120>";
	}
	else if(val=='Belg'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Belgium/BE.png' height=120>";
	}
	else if(val=='Braz'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Brazil/BR.png' height=120>";
	}
	else if(val=='Chil'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Chile/CL.png' height=120>";
	}
	else if(val=='Chin'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/China/CN.png' height=120>";
	}
	else if(val=='Colo'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Colombia/CO.png' height=120>";
	}
	else if(val=='Ecua'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Ecuador/EC.png' height=120>";
	}
	else if(val=='Engl'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/England/GB.png' height=120>";
	}
	else if(val=='Fran'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/France/FR.png' height=120>";
	}
	else if(val=='Germ'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Germany/DE.png' height=120>";
	}
	else if(val=='Gree'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Greece/GR.png' height=120>";
	}
	else if(val=='Ital'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Italy/IT.png' height=120>";
	}
	else if(val=='Mexi'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Mexico/MX.png' height=120>";
	}
	else if(val=='Neth'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Netherlands/NL.png' height=120>";
	}
	else if(val=='Para'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Paraguay/PY.png' height=120>";
	}
	else if(val=='Port'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Portugal/PT.png' height=120>";
	}
	else if(val=='Spai'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Spain/ES.png' height=120>";
	}
	else if(val=='Swed'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Sweden/SE.png' height=120>";
	}
	else if(val=='Swit'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Switzerland/CH.png' height=120>";
	}
	else if(val=='USA'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/USA/US.png' height=120>";
	}
	else if(val=='Urua'){
		document.getElementById('escudoSelecao').innerHTML = "<img src='escudos/Uruguay/UY.png' height=120>";
	}
}