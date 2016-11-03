$(function (){
    var ChangeDivArray=new Array();     //array com as <div> onde irao conter as changes
    var ChangeCoinArray=new Array();    //array com o valor de change das criptomoedas puxadas pelo API
    var nameChangessList=new Array();   //array com o nome de cada time, associado a uma Change
    var ChangessList=new Array();       //array com a ordem da maior change diaria para a menor

    for (var n = 0; n != 20; ++n){ //o numero apos o != representa o numero de diferentes divs
     ChangeDivArray[n] = $('#changediv'+n);} //onde puxa a id de cada <div> que sera modificado

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/?limit=45",
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
                else if(i==9){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==10){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==11){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==12){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==13){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==14){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==15){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==16){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==17){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==18){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==19){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==20){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==21){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==22){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==23){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==24){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==25){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==26){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==27){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==28){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==29){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==30){}     //a 30ª moeda é o Theter que não tem variação
                else if(i==31){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==32){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==33){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==34){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==35){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==36){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==37){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==38){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==39){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==40){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==41){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==42){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==43){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])}
                else if(i==44){ChangeCoinArray[i] = change.percent_change_24h;ChangessList.push(ChangeCoinArray[i])

                    function sortNumberCresc(a,b) { // coloca os valores na ordem crescente
                    return a - b;}
                    function sortNumberDecres(a,b) { // coloca os valores na ordem decrescente
                    return b - a;}
                    ChangessList.sort(sortNumberDecres); 
                    for (var n = 0; n != 45; ++n) { //o numero apos o != representa o numero de diferentes times
                                if (ChangessList[n] == ChangeCoinArray[0]){nameChangessList[n] = "   Flamengo"}
                                if (ChangessList[n] == ChangeCoinArray[1]){nameChangessList[n] = "   Santos"}
                                if (ChangessList[n] == ChangeCoinArray[2]){nameChangessList[n] = "   Internacional"}
                                if (ChangessList[n] == ChangeCoinArray[3]){nameChangessList[n] = "   Atlético-MG"}
                                if (ChangessList[n] == ChangeCoinArray[4]){nameChangessList[n] = "   Atlético-PR"}
                                if (ChangessList[n] == ChangeCoinArray[5]){nameChangessList[n] = "   Chapecoense"}
                                if (ChangessList[n] == ChangeCoinArray[6]){nameChangessList[n] = "   Botafogo"}
                                if (ChangessList[n] == ChangeCoinArray[7]){nameChangessList[n] = "   America-MG"}
                                if (ChangessList[n] == ChangeCoinArray[8]){nameChangessList[n] = "   Palmeiras"}
                                if (ChangessList[n] == ChangeCoinArray[9]){nameChangessList[n] = "   Corinthias"}
                                if (ChangessList[n] == ChangeCoinArray[10]){nameChangessList[n] = "   Ponte Preta"}
                                if (ChangessList[n] == ChangeCoinArray[11]){nameChangessList[n] = "   Vasco"}
                                if (ChangessList[n] == ChangeCoinArray[12]){nameChangessList[n] = "   Coritiba"}
                                if (ChangessList[n] == ChangeCoinArray[13]){nameChangessList[n] = "   Grêmio"}
                                if (ChangessList[n] == ChangeCoinArray[14]){nameChangessList[n] = "   Santa Cruz"}
                                if (ChangessList[n] == ChangeCoinArray[15]){nameChangessList[n] = "   Cruzeiro"}
                                if (ChangessList[n] == ChangeCoinArray[16]){nameChangessList[n] = "   Sport"}
                                if (ChangessList[n] == ChangeCoinArray[17]){nameChangessList[n] = "   Vitória"}
                                if (ChangessList[n] == ChangeCoinArray[18]){nameChangessList[n] = "   Goiás"}
                                if (ChangessList[n] == ChangeCoinArray[19]){nameChangessList[n] = "   São Paulo"}
                                if (ChangessList[n] == ChangeCoinArray[20]){nameChangessList[n] = "   Bahia"}
                                if (ChangessList[n] == ChangeCoinArray[21]){nameChangessList[n] = "   Figueirense"}
                                if (ChangessList[n] == ChangeCoinArray[22]){nameChangessList[n] = "   Fluminense"}
                                if (ChangessList[n] == ChangeCoinArray[23]){nameChangessList[n] = "   Brazil"}
                                if (ChangessList[n] == ChangeCoinArray[24]){nameChangessList[n] = "   China"}
                                if (ChangessList[n] == ChangeCoinArray[25]){nameChangessList[n] = "   USA"}
                                if (ChangessList[n] == ChangeCoinArray[26]){nameChangessList[n] = "   Spain"}
                                if (ChangessList[n] == ChangeCoinArray[27]){nameChangessList[n] = "   Argentina"}
                                if (ChangessList[n] == ChangeCoinArray[28]){nameChangessList[n] = "   France"}
                                if (ChangessList[n] == ChangeCoinArray[29]){nameChangessList[n] = "   England"}
                              //if (ChangessList[n] == ChangeCoinArray[30]){nameChangessList[n] = "   Sweden"}
                                if (ChangessList[n] == ChangeCoinArray[31]){nameChangessList[n] = "   Portugal"}
                                if (ChangessList[n] == ChangeCoinArray[32]){nameChangessList[n] = "   Greece"}
                                if (ChangessList[n] == ChangeCoinArray[33]){nameChangessList[n] = "   Switzerland"}
                                if (ChangessList[n] == ChangeCoinArray[34]){nameChangessList[n] = "   Uruguay"}
                                if (ChangessList[n] == ChangeCoinArray[35]){nameChangessList[n] = "   Germany"}
                                if (ChangessList[n] == ChangeCoinArray[36]){nameChangessList[n] = "   Belgium"}
                                if (ChangessList[n] == ChangeCoinArray[37]){nameChangessList[n] = "   Ecuador"}
                                if (ChangessList[n] == ChangeCoinArray[38]){nameChangessList[n] = "   Colombia"}
                                if (ChangessList[n] == ChangeCoinArray[39]){nameChangessList[n] = "   Netherlands"}
                                if (ChangessList[n] == ChangeCoinArray[40]){nameChangessList[n] = "   Paraguay"}
                                if (ChangessList[n] == ChangeCoinArray[41]){nameChangessList[n] = "   Mexico"}
                                if (ChangessList[n] == ChangeCoinArray[42]){nameChangessList[n] = "   Chile"}
                                if (ChangessList[n] == ChangeCoinArray[43]){nameChangessList[n] = "   Italy"}
                                if (ChangessList[n] == ChangeCoinArray[44]){nameChangessList[n] = "   Sweden"}
                            }

                  for (var n = 0; n != 20; ++n) { //o numero apos o != representa o numero de diferentes times
                if(ChangessList[n] > 0){ //maior que zero é verde
                    ChangeDivArray[n].append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ ChangessList[n] +'%)'+ nameChangessList[n] + '</h2><br>');}
                else if (ChangessList[n] < 0){ //menor que zero é vermelho
                    ChangeDivArray[n].append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ ChangessList[n] +'%)'+ nameChangessList[n] + '</h2><br>');}
                else{ //igual a zero é cinza
                    ChangeDivArray[n].append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ 0 +'%)'+ nameChangessList[n] + '</h2><br>');}
                }   
         }
            });
            }
        });
});