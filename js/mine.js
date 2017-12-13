var CoinsChange = []; //guarda a variação de cada moeda, sendo o seu nome pela api a key
var CoinsPriceUsd = [] //guarda o preço de cada moeda em dollars, sendo o seu nome pela api a key
var CoinsPriceBtc = [] //guarda o preço de cada moeda em btc, sendo o seu nome pela api a key

function add_zero(x){
    if (x < 10){
        return '0'+x;
    }
    else
        return x;
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var hours = today.getHours();
var minutes = today.getMinutes();
dd = add_zero(dd);
mm = add_zero(mm);
hours = add_zero(hours);
minutes = add_zero(minutes);

time_now = dd + '/' + mm + '/' + yyyy + ' ' + hours + ':' + minutes;

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://cors-anywhere.herokuapp.com/https://api.bitvalor.com/v1/ticker.json",
        success: function(resposta) {
            btc_real = parseFloat(resposta.ticker_24h.exchanges.FOX.open / resposta.ticker_24h.exchanges.FOX.last); //calcular quanto o btc variou em reais nas ultiams 24hrs
            CoinsChange['bitcoin'] = ((1 - btc_real) * 100).toFixed(2);
            btc_real = resposta.ticker_24h.exchanges.FOX.last;
            $('#bitcoin-price_real').append('R$' + btc_real.toFixed(2) );
            continueExecution();
            }
        });
});

function continueExecution(){ //essa função só será chamada quando o primiero AJAX acabar
     $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/?limit=310",
        success: function(response) {
            $.each(response, function(i, change) {
                if ( change.id == 'bitcoin' ){
                showNumbers(CoinsChange["bitcoin"], change.id, change.price_usd);
                }
                else if ( change.id == 'ethereum' ){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'decred' ){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'ripple' ){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'shift' ){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'ubiq' ){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'zcash' ){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'counterparty' ){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'storj' ){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'wings' ){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'golem-network-tokens' ){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'basic-attention-token'){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'iota'){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'bancor'){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'status'){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'bitcoin-cash'){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'omisego'){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'mothership'){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'district0x'){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
                else if ( change.id == 'bitcoin-gold'){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }

                else if ( change.id == 'dogecoin'){
                CoinsChange[change.id] = change.percent_change_24h;
                showNumbers(change.percent_change_24h, change.id, change.price_btc);
                }
            });
        }
    });
}

function toggle(a){
    $("#" + a).toggle(500);
}

function showNumbers(a, b, c) {

    if( b == 'bitcoin'){ //se a moeda for o BTC exibir USD ao invés de BTC
        $('#'+ b +'-price').append( "US$" + c );
    }
    else {
        $('#'+ b +'-price').append( c + " BTC");
    }

    if( b == 'bitcoin'){ //se a moeda for o BTC exibir USD ao invés de BTC
        $('#' + b + '-total-pedro').append( "US$" + (c * document.getElementById ( b +'-amount-pedro' ).innerText).toFixed(2));
        $('#' + b + '-total-mariana').append( "US$" + (c * document.getElementById ( b +'-amount-mariana' ).innerText).toFixed(2));
        $('#' + b + '-total-carlos').append( "US$" + (c * document.getElementById ( b +'-amount-carlos' ).innerText).toFixed(2));
    }
    else{
        if ( ($('#'+ b +'-amount-pedro').html()) ) { //tem que checar se existe a caixinha com a id requirida
            $('#'+ b +'-total-pedro').append( (c * document.getElementById ( b +'-amount-pedro' ).innerText).toFixed(8) + " BTC");
        }
        if ( ($('#'+ b +'-amount-carlos').html()) ) { //tem que checar se existe a caixinha com a id requirida
            $('#' + b + '-total-carlos').append( (c * document.getElementById ( b +'-amount-carlos' ).innerText).toFixed(8) + " BTC");
        }
        if ( ($('#'+ b +'-amount-mariana').html()) ) { //tem que checar se existe a caixinha com a id requirida
            $('#' + b + '-total-mariana').append( (c * document.getElementById ( b +'-amount-mariana' ).innerText).toFixed(8) + " BTC");
        }
    }

    each_coin_real_change = a - CoinsChange["bitcoin"];//variacao de cada moeda em real (variação dela em real menos a variação do bitcoin)
    //(CHANGE BTC)Muda a cor da variação diaria e coloca as setas indicando o sentido da variação
        if(each_coin_real_change > 0){ //maior que zero é verde
                $('#'+ b + '-change-btc').append('<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#0aa046;">( ' + each_coin_real_change.toFixed(2) +'%)</h2>');
            }
        else if (each_coin_real_change < 0){ //menor que zero é vermelho
                $('#'+ b + '-change-btc').append('<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#dd5056;">( '+ each_coin_real_change.toFixed(2) +'%)</h2>');
            }
        else{ //igual a zero é cinza
                $('#'+ b + '-change-btc').append('<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#9a9090;">( '+ 0 +'%)</h2>');
            }

    //(CHANGE REAL)Muda a cor da variação diaria e coloca as setas indicando o sentido da variação
        if(a > 0){ //maior que zero é verde
                $('#'+ b + '-change-real').append('<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#0aa046;">( '+ a +'%)</h2>');
            }
        else if (a < 0){ //menor que zero é vermelho
                $('#'+ b + '-change-real').append('<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#dd5056;">( '+ a +'%)</h2>');
            }
        else{ //igual a zero é cinza
                $('#'+ b + '-change-real').append('<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#9a9090;">( '+ 0 +'%)</h2>');
            }
    }

$(document).ajaxComplete(function(event,xhr,settings){
    console.log("URL",settings.url);
    if(settings.url === "https://api.coinmarketcap.com/v1/ticker/?limit=310")
    { //faz a soma do valor em btc dos portfolios, para o total
        var tot_btc_geral = 0; //valor em btc somando todos os users
        var tot_real_geral = 0; //valor em reais somando todos os users
        var porcet_geral_de_todos = 0; //porcentagem geral de variação nas ultimas 24hrs do portfolio de todos os users somados

        //Para o Pedro
        var tot_btc = 0; //valor total do user em Bitcoins
        var tot_real_P = 0; //valor total do user em Reais
        var aux_btc = 0; //puxa o valor do amount da table em Bitcoin
        var aux_real = 0; //puxa o valor do amount em reais
        var id_aux; //a id da moeda em cada .each
        var porcet_geral_P = 0; //porcentagem geral de variação nas ultimas 24hrs do portfolio do user
        $('#Ptable .Pbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total-pedro", "").replace("-amount-pedro", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            aux_real = (aux_btc * btc_real);
            tot_btc_geral += aux_btc;
            tot_real_geral += aux_real;
            tot_btc += aux_btc;
            tot_real_P += aux_real;
            $('#' + id_aux + '-real-pedro').append('R$' + aux_real.toFixed(2) );
        });
        $('#Ptable .Pbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total-pedro", "").replace("-amount-pedro", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            porcet_geral_P += ( CoinsChange[id_aux] ) * ( aux_btc / tot_btc ); //vai somando a porcentagem (já com uma media ponderada, com o peso de cada moeda sobre o portfolio) (porcentagem de variação em BTC)
        });
        porcet_geral_P = porcet_geral_P.toFixed(2); //passa a variacao geral do port em btc para apenas 2 casa decimais
        aux_btc = tot_real_P * porcet_geral_P / (100 + parseFloat(porcet_geral_P)); //uso o aux_btc apenas como auxiliar, não está em seu uso padrão
        if (porcet_geral_P > 0){ porcet_geral_P = '+' + porcet_geral_P; }
        if (aux_btc > 0){ aux_btc = '+R$' + aux_btc.toFixed(2); }
        else if (aux_btc < 0){ aux_btc = aux_btc.toFixed(2).replace("-", "-R$"); }
        else{ aux_btc = '-';}
        $('#Pvariat_percent').append('<strong>('+ porcet_geral_P +'%)</strong>');
        $('#Pvariat_money').append('<strong>('+ aux_btc +')</strong>');
        $('#total-pedro-bitcoin').append('<strong>'+ tot_btc.toFixed(8) +' BTC</strong>');
        $('#total-pedro-real').append('<strong>R$'+ tot_real_P.toFixed(2) +'</strong>');
        console.log('Pedro:');
        console.log(time_now + ' || ' + tot_btc.toFixed(8) + 'BTC || R$' + tot_real_P.toFixed(2));

        //Para o CARLOS
        tot_btc = 0; //valor total do user em Bitcoins
        tot_real_C = 0; //valor total do user em Reais
        aux_btc = 0; //puxa o valor do amount da table amount anterior em Bitcoin
        aux_real = 0; //puxa o valor do amount em reais
        id_aux; //a id da moeda em cada .each
        porcet_geral_C = 0; //porcentagem geral de variação nas ultimas 24hrs do portfolio do user
        $('#Ctable .Cbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total-carlos", "").replace("-amount-carlos", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            aux_real = (aux_btc * btc_real);
            tot_btc_geral += aux_btc;
            tot_real_geral += aux_real;
            tot_btc += aux_btc;
            tot_real_C += aux_real;
            $('#' + id_aux + '-real-carlos').append('R$' + aux_real.toFixed(2) );
        });
        $('#Ctable .Cbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total-carlos", "").replace("-amount-carlos", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            porcet_geral_C += ( CoinsChange[id_aux] ) * ( aux_btc / tot_btc ); //vai somando a porcentagem (já com uma media ponderada, com o peso de cada moeda sobre o portfolio) (porcentagem de variação em BTC)
        });
        porcet_geral_C = porcet_geral_C.toFixed(2); //passa a variacao geral do port em btc para apenas 2 casa decimais
        aux_btc = tot_real_C * porcet_geral_C / (100 + parseFloat(porcet_geral_C)); //uso o aux_btc apenas como auxiliar, não está em seu uso padrão
        if (porcet_geral_C > 0){ porcet_geral_C = '+' + porcet_geral_C; }
        if (aux_btc > 0){ aux_btc = '+R$' + aux_btc.toFixed(2); }
        else if (aux_btc < 0){ aux_btc = aux_btc.toFixed(2).replace("-", "-R$"); }
        else{ aux_btc = '-';}
        $('#Cvariat_percent').append('<strong>('+ porcet_geral_C +'%)</strong>');
        $('#Cvariat_money').append('<strong>('+ aux_btc +')</strong>');
        $('#total-carlos-bitcoin').append('<strong>'+ tot_btc.toFixed(8) +' BTC</strong>');
        $('#total-carlos-real').append('<strong>R$'+ tot_real_C.toFixed(2) +'</strong>');
        console.log('Carlos:');
        console.log(time_now + ' || ' + tot_btc.toFixed(8) + 'BTC || R$' + tot_real_C.toFixed(2));

        //Para a MARIANA
        tot_btc = 0; //valor total do user em Bitcoins
        tot_real_M = 0; //valor total do user em Reais
        aux_btc = 0; //puxa o valor do amount da table amount anterior em Bitcoin
        aux_real = 0; //puxa o valor do amount em reais
        id_aux; //a id da moeda em cada .each
        porcet_geral_M = 0; //porcentagem geral de variação nas ultimas 24hrs do portfolio do user
        $('#Mtable .Mbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total-mariana", "").replace("-amount-mariana", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            aux_real = (aux_btc * btc_real);
            tot_btc_geral += aux_btc;
            tot_real_geral += aux_real;
            tot_btc += aux_btc;
            tot_real_M += aux_real;
            $('#' + id_aux + '-real-mariana').append('R$' + aux_real.toFixed(2) );
        });
        $('#Mtable .Mbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total-mariana", "").replace("-amount-mariana", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            porcet_geral_M += ( CoinsChange[id_aux] ) * ( aux_btc / tot_btc ); //vai somando a porcentagem (já com uma media ponderada, com o peso de cada moeda sobre o portfolio) (porcentagem de variação em BTC)
        });
        porcet_geral_M = porcet_geral_M.toFixed(2); //passa a variacao geral do port em btc para apenas 2 casa decimais
        aux_btc = tot_real_M * porcet_geral_M / (100 + parseFloat(porcet_geral_M)); //uso o aux_btc apenas como auxiliar, não está em seu uso padrão
        if (porcet_geral_M > 0){ porcet_geral_M = '+' + porcet_geral_M; }
        if (aux_btc > 0){ aux_btc = '+R$' + aux_btc.toFixed(2); }
        else if (aux_btc < 0){ aux_btc = aux_btc.toFixed(2).replace("-", "-R$"); }
        else{ aux_btc = '-';}
        $('#Mvariat_percent').append('<strong>('+ porcet_geral_M +'%)</strong>');
        $('#Mvariat_money').append('<strong>('+ aux_btc +')</strong>');
        $('#total-mariana-bitcoin').append('<strong>'+ tot_btc.toFixed(8) +' BTC</strong>');
        $('#total-mariana-real').append('<strong>R$'+ tot_real_M.toFixed(2) +'</strong>');
        console.log('Mariana:');
        console.log(time_now + ' || ' + tot_btc.toFixed(8) + 'BTC || R$' + tot_real_M.toFixed(2));

        //APOS TUDO FAZ A SOMA E O APPEND COM OS VALORES DE TODOS JUNTOS
        porcet_geral_de_todos = porcet_geral_P * ( tot_real_P / tot_real_geral) + porcet_geral_C * ( tot_real_C / tot_real_geral) + porcet_geral_M * ( tot_real_M / tot_real_geral); //soma de todas as porcentagens, de maneira ponderada
        aux_btc = tot_real_geral * porcet_geral_de_todos / (100 + porcet_geral_de_todos); //uso o aux_btc apenas como auxiliar, não está em seu uso padrão
        porcet_geral_de_todos = porcet_geral_de_todos.toFixed(2); //passa a variacao geral do port em btc para apenas 2 casa decimais
        if (porcet_geral_de_todos > 0){ porcet_geral_de_todos = '+' + porcet_geral_de_todos; }
        if (aux_btc > 0){ aux_btc = '+R$' + aux_btc.toFixed(2); }
        else if (aux_btc < 0){ aux_btc = aux_btc.toFixed(2).replace("-", "-R$"); }
        else{ aux_btc = '-';}
        $('#Tvariat_percent').append('<strong>('+ porcet_geral_de_todos +'%)</strong>');
        $('#Tvariat_money').append('<strong>('+ aux_btc +')</strong>');
        $('#total-em-btc').append('<strong>'+  tot_btc_geral.toFixed(8) +' BTC</strong>');
        $('#total-em-real').append('<strong>R$'+ tot_real_geral.toFixed(2) +'</strong>');
        console.log('TOTAL:');
        console.log(time_now + ' || ' + tot_btc_geral.toFixed(8) + 'BTC || R$' + tot_real_geral.toFixed(2));

    }
});
