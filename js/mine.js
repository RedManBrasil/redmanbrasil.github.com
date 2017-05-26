$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/bitcoin/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('bitcoin').innerHTML = change.percent_change_24h;
                a = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/ethereum/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('ethereum').innerHTML = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/decred/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('decred').innerHTML = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/shift/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('shift').innerHTML = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/ubiq/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('ubiq').innerHTML = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/digixdao/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('digixdao').innerHTML = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/digixdao/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('digixdao').innerHTML = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/zcash/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('zcash').innerHTML = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/counterparty/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('counterparty').innerHTML = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/chronobank/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('chronobank').innerHTML = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/storjcoin-x/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('storjcoin-x').innerHTML = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/wings/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('wings').innerHTML = change.percent_change_24h;
            });
        }
    });
});

$(function (){

    $.ajax({
        type: 'GET',
        url: "https://api.coinmarketcap.com/v1/ticker/golem-network-tokens/",
        success: function(response) {
            $.each(response, function(i, change) {
                document.getElementById('golem-network-tokens').innerHTML = change.percent_change_24h;
            });
        }
    });
});
