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
                    changebtc = change.percent_change_24h;
                    console.log(changebtc);
                }
                else if(i==1){
                    changeeth = change.percent_change_24h;
                    console.log(changeeth);
                }
                else if(i==2){
                    changerip = change.percent_change_24h;
                    console.log(changerip);
                }
                else if(i==3){
                    changelit = change.percent_change_24h;
                    console.log(changelit);
                }
                else if(i==4){
                    changeetc = change.percent_change_24h;
                    function sortNumber(a,b) {
                    return b - a;
                            }

                    ChangessList = [changebtc, changeeth, changerip, changelit, changeetc];
                    ChangessList.sort(sortNumber);
                    console.log(ChangessList);
                    change0 = ChangessList[0];
                    change1 = ChangessList[1];
                    change2 = ChangessList[2];
                    change3 = ChangessList[3];
                    change4 = ChangessList[4];

                    var nameChangessList = [];
                    for (var n = 0; n != 5; ++n) {
                                if (ChangessList[n] == changebtc){nameChangessList[n] = "   Flamengo"}
                                if (ChangessList[n] == changeetc){nameChangessList[n] = "   Santos"}
                                if (ChangessList[n] == changeeth){nameChangessList[n] = "   Internacional"}
                                if (ChangessList[n] == changelit){nameChangessList[n] = "   China"}
                                if (ChangessList[n] == changerip){nameChangessList[n] = "   Brazil"}
                            }
                    console.log(nameChangessList);

                
                if(change0 > 0){
                    $firstChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change0 +'%)'+ nameChangessList[0] + '</h2><br>');}
                else if (change0 < 0){
                    $firstChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change0 +'%)'+ nameChangessList[0] + '</h2><br>');}
                else{
                    $firstChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ change0 +'%)'+ nameChangessList[0] + '</h2><br>');}
                
                            
                    if(change1 > 0){
                    $secondChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change1 +'%)'+ nameChangessList[1] + '</h2><br>');}
                else if (change1 < 0){
                    $secondChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change1 +'%)'+ nameChangessList[1] + '</h2><br>');}
                else{
                    $secondChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ change1 +'%)'+ nameChangessList[1] + '</h2><br>');}
                

                    if(change2 > 0){
                    $thirdChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change2 +'%)'+ nameChangessList[2] + '</h2><br>');}
                else if (change2 < 0){
                    $thirdChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change2 +'%)'+ nameChangessList[2] + '</h2><br>');}
                else{
                    $thirdChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ change2 +'%)'+ nameChangessList[2] + '</h2><br>');}

                
                    if(change3 > 0){
                    $fourthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change3 +'%)'+ nameChangessList[3] + '</h2><br>');}
                else if (change3 < 0){
                    $fourthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change3 +'%)'+ nameChangessList[3] + '</h2><br>');}
                else{
                    $fourthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ change3 +'%)'+ nameChangessList[3] + '</h2><br>');}
                
       
                    if(change4 > 0){
                    $fifthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/UpGreen.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#0aa046;">( '+ change4 +'%)'+ nameChangessList[4] + '</h2><br>');}
                else if (change4 < 0){
                    $fifthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/DownRed.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#dd5056;">( '+ change4 +'%)'+ nameChangessList[4] + '</h2><br>');}
                else{
                    $fifthChange.append('&nbsp;&nbsp;&nbsp;&nbsp;<img src="css/imgs/EqualGray.png" style="margin-bottom:-2px;width: 6%;">&nbsp;&nbsp;<h2 style="display:inline-block;color:#9a9090;">( '+ change4 +'%)'+ nameChangessList[4] + '</h2><br>');}
         }

            });
            }

        });
});