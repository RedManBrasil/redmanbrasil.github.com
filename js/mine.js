//var PriceA = new Array();     //array com os preços
//var ChangeA = new Array();   //array com as porcentagens de variações diárias
//var Pvalues = new Array();   //array com os valores em BTC(e do BTC é em USD) das moedas do Pedro
//var Mvalues = new Array();   //array com os valores em BTC(e do BTC é em USD) das moedas da Mariana 
//var Cvalues = new Array();   //array com os valores em BTC(e do BTC é em USD) das moedas do Carlos

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
                if ( change.id == 'bitcoin' ){ showNumbers(change.percent_change_24h, change.id, change.price_usd) }
                else if ( change.id == 'ethereum' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
                else if ( change.id == 'decred' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
                else if ( change.id == 'ripple' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
                else if ( change.id == 'shift' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
                else if ( change.id == 'ubiq' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
                else if ( change.id == 'digixdao' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
                else if ( change.id == 'zcash' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
                else if ( change.id == 'counterparty' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
                else if ( change.id == 'chronobank' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
                else if ( change.id == 'storjcoin-x' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
                else if ( change.id == 'wings' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
                else if ( change.id == 'golem-network-tokens' ){ showNumbers(change.percent_change_24h, change.id, change.price_btc) }
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
    $("#" + a).toggle(500);
}

$(document).ajaxComplete(function(event,xhr,settings){
    console.log("URL",settings.url);
    if(settings.url === "https://api.coinmarketcap.com/v1/ticker/?limit=200")
    { //faz a soma do valor em btc dos portfolios, para o total
        var tot_btc_geral = 0; //valor em btc somando todos os users
        var tot_real_geral = 0; //valor em reais somando todos os users

        //Para o Pedro
        var tot_btc = 0; //valor total do user em Bitcoins
        var tot_real = 0; //valor total do user em Reais
        var aux_btc = 0; //puxa o valor do amount da table amount anterior em Bitcoin
        var aux_real = 0; //puxa o valor do amount em reais
        var id_aux; //a id da moeda em cada .each
        $('#Ptable .Pbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total-pedro", "").replace("-amount-pedro", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            aux_real = (aux_btc * btc_real);
            tot_btc_geral += aux_btc;
            tot_real_geral += aux_real;
            tot_btc += aux_btc;
            tot_real += aux_real;
            $('#' + id_aux + '-real-pedro').append('R$' + aux_real.toFixed(2) );
        });
        $('#total-pedro-bitcoin').append('<strong>'+ tot_btc.toFixed(8) +' BTC</strong>');
        $('#total-pedro-real').append('<strong>R$'+ tot_real.toFixed(2) +'</strong>');

        //Para o CARLOS
        tot_btc = 0; //valor total do user em Bitcoins
        tot_real = 0; //valor total do user em Reais
        aux_btc = 0; //puxa o valor do amount da table amount anterior em Bitcoin
        aux_real = 0; //puxa o valor do amount em reais
        id_aux; //a id da moeda em cada .each
        $('#Ctable .Cbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total-carlos", "").replace("-amount-carlos", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            aux_real = (aux_btc * btc_real);
            tot_btc_geral += aux_btc;
            tot_real_geral += aux_real;
            tot_btc += aux_btc;
            tot_real += aux_real;
            $('#' + id_aux + '-real-carlos').append('R$' + aux_real.toFixed(2) );
        });
        $('#total-carlos-bitcoin').append('<strong>'+ tot_btc.toFixed(8) +' BTC</strong>');
        $('#total-carlos-real').append('<strong>R$'+ tot_real.toFixed(2) +'</strong>');

        //Para a MARIANA
        tot_btc = 0; //valor total do user em Bitcoins
        tot_real = 0; //valor total do user em Reais
        aux_btc = 0; //puxa o valor do amount da table amount anterior em Bitcoin
        aux_real = 0; //puxa o valor do amount em reais
        id_aux; //a id da moeda em cada .each
        $('#Mtable .Mbtcvalue').each(function() {
            id_aux = $(this).attr('id').replace("-total-mariana", "").replace("-amount-mariana", ""); //nome da moeda a qual se pega a informação
            aux_btc = parseFloat($(this).text());
            aux_real = (aux_btc * btc_real);
            tot_btc_geral += aux_btc;
            tot_real_geral += aux_real;
            tot_btc += aux_btc;
            tot_real += aux_real;
            $('#' + id_aux + '-real-mariana').append('R$' + aux_real.toFixed(2) );
        });
        $('#total-mariana-bitcoin').append('<strong>'+ tot_btc.toFixed(8) +' BTC</strong>');
        $('#total-mariana-real').append('<strong>R$'+ tot_real.toFixed(2) +'</strong>');
    }
    $('#total-em-btc').append('<strong>'+  tot_btc_geral.toFixed(8) +' BTC</strong>');
    $('#total-em-real').append('<strong>R$'+ tot_real_geral.toFixed(2) +'</strong>');
});