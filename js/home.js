$(function (){
    var ChangeDivArray=new Array();     //array com as <div> onde irao conter as changes
    var ChangeCoinArray=new Array();    //array com o valor de change das criptomoedas puxadas pelo API
    var nameChangessList=new Array();   //array com o nome de cada time, associado a uma Change
    var ChangessList=new Array();       //array com a ordem da maior change diaria para a menor

    for (var n = 0; n != 10; ++n){ //o numero apos o != representa o numero de diferentes divs
     ChangeDivArray[n] = $('#changediv'+n);} //onde puxa a id de cada <div> que sera modificado

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/?limit=10",
        success: function(response) {
            $.each(response, function(i, change) {

                if(i==0){ChangeCoinArray[i] = change.percent_change_24h; ChangessList.push(ChangeCoinArray[i])}
                else if(i==1){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==2){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==3){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==4){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==5){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==6){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==7){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==8){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==9){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])
                    function sortNumber(a,b) {
                    return b - a;
                            }
                    ChangessList.sort(sortNumber); // coloca os valores na ordem crescente/decrescente chamando a funcao SortNumber
                    for (var n = 0; n != 10; ++n) { //o numero apos o != representa o numero de diferentes times
                                if (ChangessList[n] == ChangeCoinArray[0]){nameChangessList[n] = "   Flamengo"}
                                if (ChangessList[n] == ChangeCoinArray[1]){nameChangessList[n] = "   Santos"}
                                if (ChangessList[n] == ChangeCoinArray[2]){nameChangessList[n] = "   Internacional"}
                                if (ChangessList[n] == ChangeCoinArray[3]){nameChangessList[n] = "   China"}
                                if (ChangessList[n] == ChangeCoinArray[4]){nameChangessList[n] = "   Brazil"}
                                if (ChangessList[n] == ChangeCoinArray[5]){nameChangessList[n] = "   Chapecoense"}
                                if (ChangessList[n] == ChangeCoinArray[6]){nameChangessList[n] = "   Botafogo"}
                                if (ChangessList[n] == ChangeCoinArray[7]){nameChangessList[n] = "   USA"}
                                if (ChangessList[n] == ChangeCoinArray[8]){nameChangessList[n] = "   Palmeiras"}
                                if (ChangessList[n] == ChangeCoinArray[9]){nameChangessList[n] = "   Corinthias"}
                            }

                  for (var n = 0; n != 10; ++n) { //o numero apos o != representa o numero de diferentes times
                if(ChangessList[n] > 0){ //maior que zero é verde
                    ChangeDivArray[n].append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ ChangessList[n] +'%)'+ nameChangessList[n] + '</h2><br>');}
                else if (ChangessList[n] < 0){ //menor que zero é vermelho
                    ChangeDivArray[n].append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ ChangessList[n] +'%)'+ nameChangessList[n] + '</h2><br>');}
                else{ //igual a zero é cinza
                    ChangeDivArray[n].append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ ChangessList[n] +'%)'+ nameChangessList[n] + '</h2><br>');}
                }    
         }
            });
            }
        });
});