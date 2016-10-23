function check(){
	var val = document.getElementById('TeamBRList').value;
	if(val=='Fla'){
		document.getElementById('escudoTime').innerHTML = "<img src='escudos/Flamengo.png'>";
	}
	else if(val=='meters'){
		res = 2;
	}
	else if(val=='millimeters'){
		res = 3;
	}
	else{
		res = 1;
	}
	return res;
}