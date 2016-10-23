function check(){
	var val = document.getElementById('TeamBRList').value;
	if(val=='Fla'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Flamengo.png' style='float:center;''>";
	}
	else if(val=='Bot'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Botafogo.png' style='float:center;''>";
	}
	else if(val=='millimeters'){
		res = 3;
	}

}