$(function (){

    var $firstChange = $('#firstChange');
    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/vcash/",
        success: function(firstChange) {
            $.each(firstChange, function(i, change) {
                if(change.percent_change_24h > 0){
                    $firstChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change.percent_change_24h +'%)Flamengo</h2><br>');}
                else if (change.percent_change_24h < 0){
                    $firstChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change.percent_change_24h +'%)Flamengo</h2><br>');}
                else{
                    $firstChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9A9090;">( '+ change.percent_change_24h +'%)Flamengo</h2><br>');}
                });
            }
        });
});

$(function (){

    var $secondChange = $('#secondChange');

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/bitcoin/",
        success: function(secondChange) {
            $.each(secondChange, function(i, change) {
                if(change.percent_change_24h > 0){
                    $secondChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change.percent_change_24h +'%)Santos</h2><br>');}
                else if (change.percent_change_24h < 0){
                    $secondChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change.percent_change_24h +'%)Santos</h2><br>');}
                else{
                    $secondChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9A9090;">( '+ change.percent_change_24h +'%)Santos</h2><br>');}
                });
            }
        });
});

$(function (){

    var $thirdChange = $('#thirdChange');

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/ethereum/",
        success: function(thirdChange) {
            $.each(thirdChange, function(i, change) {
                if(change.percent_change_24h > 0){
                    $thirdChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change.percent_change_24h +'%)China</h2><br>');}
                else if (change.percent_change_24h < 0){
                    $thirdChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change.percent_change_24h +'%)China</h2><br>');}
                else{
                    $thirdChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9A9090;">( '+ change.percent_change_24h +'%)China</h2><br>');}
                });
            }
        });
});