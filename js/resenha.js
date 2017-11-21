var CoinsChange = []; //guarda a variação de cada moeda, sendo o seu nome pela api a key
//var CoinsPrice = [] //guarda o preço de cada moeda, sendo o seu nome pela api a key

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
        url: "https://api.coinmarketcap.com/v1/ticker/?limit=80",
        success: function(response) {
            $.each(response, function(i, change) {
                if ( change.id == 'bitcoin' ){
                showNumbers(CoinsChange["bitcoin"], change.id, change.price_usd);
                }
                else if ( change.id == 'decred'){
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
        $('#' + b + '-total-resenha').append( "US$" + (c * document.getElementById ( b +'-amount-resenha' ).innerText).toFixed(2));
        }
    else{
        if ( ($('#'+ b +'-amount-resenha').html()) ) { //tem que checar se existe a caixinha com a id requirida
            $('#'+ b +'-total-resenha').append( (c * document.getElementById ( b +'-amount-resenha' ).innerText).toFixed(8) + " BTC");
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
    if(settings.url === "https://api.coinmarketcap.com/v1/ticker/?limit=30")
    { //faz a soma do valor em btc dos portfolios, para o total
        var tot_btc_geral = 0; //valor em btc somando todos os users
        var tot_real_geral = 0; //valor em reais somando todos os users
        var porcet_geral_de_todos = 0; //porcentagem geral de variação nas ultimas 24hrs do portfolio de todos os users somados

        //Para a resenha
        var tot_btc = 0; //valor total do user em Bitcoins
        var tot_real_R = 0; //valor total do user em Reais
        var aux_btc = 0; //puxa o valor do amount da table em Bitcoin
        var aux_real = 0; //puxa o valor do amount em reais
        var id_aux; //a id da moeda em cada .each
        var porcet_geral_R = 0; //porcentagem geral de variação nas ultimas 24hrs do portfolio do user
        $('#Rtable .Rbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total-resenha", "").replace("-amount-resenha", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            aux_real = (aux_btc * btc_real);
            tot_btc_geral += aux_btc;
            tot_real_geral += aux_real;
            tot_btc += aux_btc;
            tot_real_R += aux_real;
            $('#' + id_aux + '-real-resenha').append('R$' + aux_real.toFixed(2) );
        });
        $('#Rtable .Rbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total-resenha", "").replace("-amount-resenha", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            porcet_geral_R += ( CoinsChange[id_aux] ) * ( aux_btc / tot_btc ); //vai somando a porcentagem (já com uma media ponderada, com o peso de cada moeda sobre o portfolio) (porcentagem de variação em BTC)
        });
        porcet_geral_R = porcet_geral_R.toFixed(2); //passa a variacao geral do port em btc para apenas 2 casa decimais
        aux_btc = tot_real_R * porcet_geral_R / (100 + parseFloat(porcet_geral_R)); //uso o aux_btc apenas como auxiliar, não está em seu uso padrão
        if (porcet_geral_R > 0){ porcet_geral_R = '+' + porcet_geral_R; }
        if (aux_btc > 0){ aux_btc = '+R$' + aux_btc.toFixed(2); }
        else if (aux_btc < 0){ aux_btc = aux_btc.toFixed(2).replace("-", "-R$"); }
        else{ aux_btc = '-';}
        $('#Rvariat_percent').append('<strong>('+ porcet_geral_R +'%)</strong>');
        $('#Rvariat_money').append('<strong>('+ aux_btc +')</strong>');
        $('#total-resenha-bitcoin').append('<strong>'+ tot_btc.toFixed(8) +' BTC</strong>');
        $('#total-resenha-real').append('<strong>R$'+ tot_real_R.toFixed(2) +'</strong>');
        console.log('resenha:');
        console.log(time_now + ' || ' + tot_btc.toFixed(8) + 'BTC || R$' + tot_real_R.toFixed(2));
      }
});
