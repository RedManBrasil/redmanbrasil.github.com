
var distance = document.getElementById("distance");
var folds = document.getElementById("folds"); 

function check(){
	var val = document.getElementById('Sone').value;
	if(val=='kilometers'){
		res = 1;
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


function calc() {
	var dist = parseFloat(distance.value);
	var x = 0;
	var times = 1;
	var ras = check(ras);
	if (ras == 1){
			if ( dist <= 0.000001 && dist > 0){
		folds.innerHTML = "You don't need to fucking fold your sheet";
		}
		else if( dist <= 0)
		{
			folds.innerHTML = "Just enter a correct value, you prick";
		}
		else{
		while ( x < dist)
		{
			x = 0.000001*(Math.pow(2, times));
			times++;
		}
		if(dist==1)
		{
			if(times==2)
			{
				folds.innerHTML = "You have to fold your piece of paper "+(times-1)+" time, to reach "+dist+" kilometer";
			}
			else
			{
				folds.innerHTML = "You have to fold your piece of paper "+(times-1)+" times, to reach "+dist+" kilometer";
			}
		}
		else if(times==2)
		{
			folds.innerHTML = "You have to fold your piece of paper "+(times-1)+" time, to reach "+dist+" kilometers";
		}
		else
		folds.innerHTML = "You have to fold your piece of paper "+(times-1)+" times, to reach "+dist+" kilometers";
			}
}

	if (ras == 2){
		if ( dist <= 0.001 && dist > 0){
			folds.innerHTML = "You don't need to fucking fold your sheet";
		}
		else if( dist <= 0)
		{
			folds.innerHTML = "Just enter a correct value, you prick";
		}
		else{
		while ( x < dist)
		{
			x = 0.001*(Math.pow(2, times));
			times++;
		}
		if(dist==1)
		{
			if(times==2)
			{
				folds.innerHTML = "You have to fold your piece of paper "+(times-1)+" time, to reach "+dist+" meter";
			}
			else
			{
				folds.innerHTML = "You have to fold your piece of paper "+(times-1)+" times, to reach "+dist+" meter";
			}
		}
		else if(times==2)
		{
			folds.innerHTML = "You have to fold your piece of paper "+(times-1)+" time, to reach "+dist+" meters";
		}
		else
		folds.innerHTML = "You have to fold your piece of paper "+(times-1)+" times, to reach "+dist+" meters";
		}
	}


	if (ras == 3){
		if ( dist <= 1 && dist > 0){
		folds.innerHTML = "You don't need to fucking fold your sheet";
		}
		else if( dist <= 0)
		{
			folds.innerHTML = "Just enter a correct value, you prick";
		}
		else{
		while ( x < dist)
		{
			x = 1*(Math.pow(2, times));
			times++;
		}
		if(times==2)
		{
			if(dist==1){
				folds.innerHTML = "You have to fold your piece of paper "+(times-1)+" time, to reach "+dist+" millimeter";
			}
			else
			folds.innerHTML = "You have to fold your piece of paper "+(times-1)+" time, to reach "+dist+" millimeters";
		}
		else
		folds.innerHTML = "You have to fold your piece of paper "+(times-1)+" times, to reach "+dist+" millimeters";
		}
	}
}