var CountryArrayAPI = {
  "AR": {
    "name": "Argentina",      //nome do pais/time
    "code": "AR",             // codigo usado para puxar o escudo
    "country": true,
    "value": 4.3,             // valor do time em biilhões de dólares( Team Value )
    "stock": 17.43,           // valor da ação em dólares
    "last_5_games_change": -5 //diferenca percentual do peco da acao nos ultimos 5 jogos da equipe
  },
  "BE": {
    "name": "Belgium",
    "code": "BE",
    "country": true,
    "value": 7.0,
    "stock": 24.42,
    "last_5_games_change": 3
  },
  "BR": {
    "name": "Brazil",
    "code": "BR",
    "country": true,
    "value": 9.8,
    "stock": 28.14,
    "last_5_games_change": 22
  },
  "CL": {
    "name": "Chile",
    "code": "CL",
    "country": true,
    "value": 5.5,
    "stock": 20.40,
    "last_5_games_change": 12
  },
  "CN": {
    "name": "China",
    "code": "CN",
    "country": true,
    "value": 7.2,
    "stock": 17.32,
    "last_5_games_change": 21
  },
  "CO": {
    "name": "Colombia",
    "code": "CO",
    "country": true,
    "value": 3.9,
    "stock": 16.59,
    "last_5_games_change": -1
  },
  "EC": {
    "name": "Ecuador",
    "code": "EC",
    "country": true,
    "value": 2.1,
    "stock": 14.75,
    "last_5_games_change": 10
  },
  "GB": {
    "name": "England", //como o mapa nao divide o reino unido, tem que deixar o país como inglaterra
    "code": "GB",
    "country": true,
    "value": 5.9,
    "stock": 21.45,
    "last_5_games_change": -12
  },
  "FR": {
    "name": "France",
    "code": "FR",
    "country": true,
    "value": 6.9,
    "stock": 23.45,
    "last_5_games_change": -9
  },
  "DE": {
    "name": "Germany",
    "code": "DE",
    "country": true,
    "value": 10.2,
    "stock": 29.34,
    "last_5_games_change": 2
  },
  "GR": {
    "name": "Greece",
    "code": "GR",
    "country": true,
    "value": 3.8,
    "stock": 16.23,
    "last_5_games_change": 2
  },
  "IT": {
    "name": "Italy",
    "code": "IT",
    "country": true,
    "value": 6.1,
    "stock": 20.45,
    "last_5_games_change": 1
  },
  "MX": {
    "name": "Mexico",
    "code": "MX",
    "country": true,
    "value": 4.7,
    "stock": 18.19,
    "last_5_games_change": -2
  },
  "NL": {
    "name": "Netherlands",
    "code": "NL",
    "country": true,
    "value": 6.3,
    "stock": 23.78,
    "last_5_games_change": -15
  },
  "PY": {
    "name": "Paraguay",
    "code": "PY",
    "country": true,
    "value": 2.5,
    "stock": 12.23,
    "last_5_games_change": -7
  },
  "PT": {
    "name": "Portugal",
    "code": "PT",
    "country": true,
    "value": 7.1,
    "stock": 24.23,
    "last_5_games_change": 5
  },
  "ES": {
    "name": "Spain",
    "code": "ES",
    "country": true,
    "value": 6.2,
    "stock": 22.45,
    "last_5_games_change": -10
  },
  "SE": {
    "name": "Sweden",
    "code": "SE",
    "country": true,
    "value": 4.3,
    "stock": 17.35,
    "last_5_games_change": -4
  },
  "CH": {
    "name": "Switzerland",
    "code": "CH",
    "country": true,
    "value": 4.8,
    "stock": 18.96,
    "last_5_games_change": 4
  },
  "US": {
    "name": "USA",
    "code": "US",
    "country": true,
    "value": 5.4,
    "stock": 21.99,
    "last_5_games_change": -1
  },
  "UY": {
    "name": "Uruguay",
    "code": "UY",
    "country": true,
    "value": 5.9,
    "stock": 23.45,
    "last_5_games_change": 12
  },
};

var TeamsAPI = {
  "BR": [ 
  {
            "name": "Brazil",
            "code": "BR",
            "country": true,
            "value": 9.8,
            "stock": 28.14,
            "last_5_games_change": 22
         },
 {
            "name": "Flamengo",
            "code": "flamengo",
            "country": false,
            "value": 4.9,
            "stock": 19.84,
            "last_5_games_change": -3
         },
  {
            "name": "Botafogo",
            "code": "botafogo",
            "country": false,
            "value": 4.2,
            "stock": 17.93,
            "last_5_games_change": 8
         },
  {
            "name": "Vasco",
            "code": "vasco",
            "country": false,
            "value": 2.9,
            "stock": 12.45,
            "last_5_games_change": -16
         },
  {
            "name": "Fluminense",
            "code": "fluminense",
            "country": false,
            "value": 3.6,
            "stock": 15.93,
            "last_5_games_change": -2
         }
        ]
  };