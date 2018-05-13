function appnd_color(a) {
  if (a <= 15) {
    return "#3063FF";
  }
  else if (a > 15 && a <= 25) {
    return "#3BE0FF";
  }
  else if (a > 25 && a <= 34) {
    return "#FFC52C";
  }
  else if (a > 34) {
    return "#FF9F17";
  }
}


$(function (){

    $.ajax({
        type: 'GET',
        url: "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/538381080d545823f4711377fbd8ad06/-22.968666,%20-43.199278",
        success: function(resposta) {
            tempo = resposta.currently.summary;
            $('#tempoRJ').append(tempo);
            temperatura = Math.round((resposta.currently.temperature -32) * 5 / 9);
            $('#temperaturaRJ').append(temperatura);
            color = appnd_color(temperatura);
            document.getElementById("boxRJ").style.background = color;
            }
        });

    $.ajax({
        type: 'GET',
        url: "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/538381080d545823f4711377fbd8ad06/40.706519,%20-73.927528",
        success: function(resposta) {
            tempo = resposta.currently.summary;
            $('#tempoNY').append(tempo);
            temperatura = Math.round((resposta.currently.temperature -32) * 5 / 9);
            $('#temperaturaNY').append(temperatura);
            color = appnd_color(temperatura);
            document.getElementById("boxNY").style.background = color;
            }
        });

    $.ajax({
        type: 'GET',
        url: "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/538381080d545823f4711377fbd8ad06/23.466345,%2014.154959",
        success: function(resposta) {
            tempo = resposta.currently.summary;
            $('#tempoSA').append(tempo);
            temperatura = Math.round((resposta.currently.temperature -32) * 5 / 9);
            $('#temperaturaSA').append(temperatura);
            color = appnd_color(temperatura);
            document.getElementById("boxSA").style.background = color;
            }
        });

});
