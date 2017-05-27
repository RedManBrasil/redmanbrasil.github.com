var PriceA = new Array();     //array com os preços
var ChangeA = new Array();   //array com as porcentagens de variações diárias
var Pvalues = new Array();   //array com os valores em BTC(e do BTC é em USD) das moedas do Pedro
var Mvalues = new Array();   //array com os valores em BTC(e do BTC é em USD) das moedas da Mariana 
var Cvalues = new Array();   //array com os valores em BTC(e do BTC é em USD) das moedas do Carlos

function showNumbers(a, b, c) {

    if( b == 'bitcoin'){ //se a moeda for o BTC exibir USD ao invés de BTC
        $('#'+ b +'-price').append( "US$" + c );
    }
    else {
        $('#'+ b +'-price').append( c + " BTC");
    }
    if( b == 'bitcoin'){ //se a moeda for o BTC exibir USD ao invés de BTC
        $('#' + b + '-total').append( (c * document.getElementById ( b +'-amount' ).innerText).toFixed(8) + " USD");
    }
    else{
        if ( ($('#'+ b +'-amount').html()) ) { //tem que checar se existe a caixinha com a id requirida
            $('#'+ b +'-total').append( (c * document.getElementById ( b +'-amount' ).innerText).toFixed(8) + " BTC");
        }
    }

    if(a > 0){ //maior que zero é verde
                $('#'+ b).append('<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#0aa046;">( '+ a +'%)</h2>');
            }  
    else if (a < 0){ //menor que zero é vermelho
                $('#'+ b).append('<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#dd5056;">( '+ a +'%)</h2>');
            }
    else{ //igual a zero é cinza
                $('#'+ b).append('<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#9a9090;">( '+ 0 +'%)</h2>');
            }
}

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/?limit=200",
        success: function(response) {
            $.each(response, function(i, change) {
                if ( change.id == 'bitcoin' ){
                    PriceA[change.id] = change.price_usd;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_usd) 
                }
                else if ( change.id == 'ethereum' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc) 
                }
                else if ( change.id == 'decred' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc)
                }
                else if ( change.id == 'ripple' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc)
                }
                else if ( change.id == 'shift' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc)
                }
                else if ( change.id == 'ubiq' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc)
                }
                else if ( change.id == 'digixdao' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc)
                }
                else if ( change.id == 'zcash' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc)
                }
                else if ( change.id == 'counterparty' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc)
                }
                else if ( change.id == 'chronobank' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc)
                }
                else if ( change.id == 'storjcoin-x' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc)
                }
                else if ( change.id == 'wings' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc) }

                else if ( change.id == 'golem-network-tokens' ){
                    PriceA[change.id] = change.price_btc;
                    ChangeA[change.id] = change.percent_change_24h;
                 showNumbers(change.percent_change_24h, change.id, change.price_btc) }

            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://www.mercadobitcoin.net/api/v2/ticker/",
        success: function(resposta) {
            $.each(JSON.parse(resposta), function(n, tick) {
                btc_real = tick.last;
                $('#bitcoin-price_real').append('R$' + btc_real.toFixed(2) );
                 });  
            }
        });
    });

function toggle(a){
    $("#"+a).toggle(500);
}

$(document).ajaxComplete(function(event,xhr,settings){
    console.log("URL",settings.url);
    if(settings.url === "https://api.coinmarketcap.com/v1/ticker/?limit=200")
    { //faz a soma do valor em btc dos portfolios, para o total
        var tot_btc = 0; //valor total do user em Bitcoins
        var tot_real = 0; //valor total do user em Reais
        var aux_btc = 0; //puxa o valor do amount da table amount anterior em Bitcoin
        var aux_real = 0; //puxa o valor do amount em reais
        var id_aux; //a id da moeda em cada .each
        $('#Ptable .Pbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total", "").replace("-amount", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            aux_real = (aux_btc * btc_real);
            Pvalues[id_aux] = aux_btc; //aloca na array quanto vale determinada moeda do user
            tot_btc += aux_btc;
            tot_real += aux_real;
            $('#' + id_aux + '-real').append('R$' + aux_real.toFixed(2) );
        });
        $('#total-pedro-bitcoin').append('<strong>'+ tot_btc.toFixed(8) +' BTC</strong>');
        $('#total-pedro-real').append('<strong>R$'+ tot_real.toFixed(2) +'</strong>');
    }
});