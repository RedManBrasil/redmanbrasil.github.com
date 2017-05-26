function showNumbers(a, b, c) {
    $('#'+b+'-price').append("<h3>" + c + "</h3>");
    if(a > 0){ //maior que zero é verde
                $('#'+b).append('<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#0aa046;">( '+ a +'%)</h2>');
            }  
    else if (a < 0){ //menor que zero é vermelho
                $('#'+b).append('<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#dd5056;">( '+ a +'%)</h2>');
            }
    else{ //igual a zero é cinza
                $('#'+b).append('<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width:10%;">&nbsp;&nbsp;<h3 style="display:inline-block;color:#9a9090;">( '+ 0 +'%)</h2>');
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
