function check(){
	var val = document.getElementById('TeamBRList').value;
	if(val=='Fla'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Flamengo.png' style='float:center;''>";
	}
	else if(val=='Bot'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Botafogo.png' style='float:center;''>";
	}
	else if(val=='Vas'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/vasco.png' style='float:center;''>";
	}
	else if(val=='Flu'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/fluminense1.png' style='float:right;''>";
	}
	else if(val=='Sp'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Sao Paulo.png' style='float:center;''>";
	}
	else if(val=='San'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Santos.png' style='float:center;''>";
	}
	else if(val=='Pal'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/palmeiras.png' style='float:center;''>";
	}
	else if(val=='Cor'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Corinthias.png' style='float:center;''>";
	}
	else if(val=='AtlMG'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Atletico Mineiro.png' style='float:center;''>";
	}
	else if(val=='Cru'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/cruzeiro.png' style='float:center;''>";
	}
	else if(val=='AltPR'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Atletico Paranaense.png' style='float:center;''>";
	}
	else if(val=='Gre'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Gremio.png' style='float:center;''>";
	}
	else if(val=='Int'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Internacional.png' style='float:center;''>";
	}
	else if(val=='Spo'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Sport.png' style='float:center;''>";
	}
	else if(val=='Cha'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Chapecoense.png' style='float:center;''>";
	}
	else if(val=='Bah'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Bahia.png' style='float:center;''>";
	}
	else if(val=='Vit'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Vitoria.png' style='float:center;''>";
	}
	else if(val=='AmeMG'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/america mg.png' style='float:center;''>";
	}
	else if(val=='Coritiba'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/coritiba.png' style='float:center;''>";
	}
	else if(val=='Fig'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/figueirense.png' style='float:center;''>";
	}
	else if(val=='Pon'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Ponte Preta.png' style='float:center;''>";
	}
	else if(val=='Sta'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Santa Cruz.png' style='float:center;''>";
	}
	else if(val=='Goi'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Goias.png' style='float:center;''>";
	}
	else{
		document.getElementById('escudoTime').innerHTML = "";
	}

}