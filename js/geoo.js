$(function (){

    $.ajax({
        type: 'GET',
        url: "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/538381080d545823f4711377fbd8ad06/-22.968666,%20-43.199278",
        success: function(resposta) {
            tempo = resposta.currently.summary;
            $('#tempo').append(tempo);
            temperatura = (resposta.currently.temperature -32) * 5 / 9;
            $('#temperatura').append(Math.round(temperatura));
            }
        });
});
