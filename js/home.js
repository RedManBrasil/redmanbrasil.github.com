$(function (){

    var $firstChange = $('#firstChange');
    var $secondChange = $('#secondChange');
    var $thirdChange = $('#thirdChange');
    var $fourthChange = $('#fourthChange');
    var $fifthChange = $('#fifthChange');
    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/?limit=5",
        success: function(firstChange) {
            $.each(firstChange, function(i, change) {

               
                if(i==0){
                if(change.percent_change_24h > 0){
                    $firstChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change.percent_change_24h +'%)'+ '  Flamengo' + '</h2><br>');}
                else if (change.percent_change_24h < 0){
                    $firstChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change.percent_change_24h +'%)'+ '  Flamengo' + '</h2><br>');}
                else{
                    $firstChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ change.percent_change_24h +'%)'+ '  Flamengo' + '</h2><br>');}
                }
                
                if(i==1){
                    if(change.percent_change_24h > 0){
                    $secondChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change.percent_change_24h +'%)'+ '  Santos' + '</h2><br>');}
                else if (change.percent_change_24h < 0){
                    $secondChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change.percent_change_24h +'%)'+ '  Santos' + '</h2><br>');}
                else{
                    $secondChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ change.percent_change_24h +'%)'+ '  Santos' + '</h2><br>');}
                }

                if(i==2){
                    if(change.percent_change_24h > 0){
                    $thirdChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change.percent_change_24h +'%)'+ '  China' + '</h2><br>');}
                else if (change.percent_change_24h < 0){
                    $thirdChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change.percent_change_24h +'%)'+ '  China' + '</h2><br>');}
                else{
                    $thirdChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ change.percent_change_24h +'%)'+ '  China' + '</h2><br>');}
                }

                if(i==3){
                    if(change.percent_change_24h > 0){
                    $fourthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change.percent_change_24h +'%)'+ '  Internacional' + '</h2><br>');}
                else if (change.percent_change_24h < 0){
                    $fourthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change.percent_change_24h +'%)'+ '  Internacional' + '</h2><br>');}
                else{
                    $fourthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ change.percent_change_24h +'%)'+ '  Internacional' + '</h2><br>');}
              }  

                if(i==4){
                    if(change.percent_change_24h > 0){
                    $fifthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change.percent_change_24h +'%)'+ '  Brazil' + '</h2><br>');}
                else if (change.percent_change_24h < 0){
                    $fifthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change.percent_change_24h +'%)'+ '  Brazil' + '</h2><br>');}
                else{
                    $fifthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ change.percent_change_24h +'%)'+ '  Brazil' + '</h2><br>');}
                }

            });
            }

        });
});