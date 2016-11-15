$(document).ready(function(){
    $("#BackBtn").click(function(){
        $("#BackBtn").hide(0);
        $("#StockInfoDisplay").hide(0);
        $("#ShowCountryTeamsDiv").show(0);
        });
    $(document).on('click', '#BrazilTableTD', function(){
    $("#BackBtn").show(0);
    $("#StockInfoDisplay").show(0);
    $("#ShowCountryTeamsDiv").hide(0);
});
});
