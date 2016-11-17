var CountryArrayAPI = {
  "AR": {
    "name": "Argentina",      //nome do pais/time
    "code": "AR",             // codigo usado para puxar o escudo
    "country": true,
    "value": '4.3',             // valor do time em biilhões de dólares( Team Value )
    "stock": '17.43',           // valor da ação em dólares
    "last_5_games_change": -5 //diferenca percentual do peco da acao nos ultimos 5 jogos da equipe
  },
  "BE": {
    "name": "Belgium",
    "code": "BE",
    "country": true,
    "value": '7.0',    //tem que ser em string pq o JSON retira o final .0 quando passado para o site
    "stock": '24.42',  //saber mais em http://stackoverflow.com/questions/5520399/how-to-prevent-removing-decimal-point-when-parsing-json
    "last_5_games_change": 3
  },
  "BR": {
    "name": "Brazil",
    "code": "BR",
    "country": true,
    "value": '9.8',
    "stock": '28.14',
    "last_5_games_change": 22
  },
  "CL": {
    "name": "Chile",
    "code": "CL",
    "country": true,
    "value": '5.5',
    "stock": '20.40',
    "last_5_games_change": 12
  },
  "CN": {
    "name": "China",
    "code": "CN",
    "country": true,
    "value": '7.2',
    "stock": '17.32',
    "last_5_games_change": 21
  },
  "CO": {
    "name": "Colombia",
    "code": "CO",
    "country": true,
    "value": '3.9',
    "stock": '16.59',
    "last_5_games_change": -1
  },
  "EC": {
    "name": "Ecuador",
    "code": "EC",
    "country": true,
    "value": '2.1',
    "stock": '14.75',
    "last_5_games_change": 10
  },
  "GB": {
    "name": "England", //como o mapa nao divide o reino unido, tem que deixar o país como inglaterra
    "code": "GB",
    "country": true,
    "value": '5.9',
    "stock": '21.45',
    "last_5_games_change": -12
  },
  "FR": {
    "name": "France",
    "code": "FR",
    "country": true,
    "value": '6.9',
    "stock": '23.45',
    "last_5_games_change": -9
  },
  "DE": {
    "name": "Germany",
    "code": "DE",
    "country": true,
    "value": '10.2',
    "stock": '29.34',
    "last_5_games_change": 2
  },
  "GR": {
    "name": "Greece",
    "code": "GR",
    "country": true,
    "value": '3.8',
    "stock": '16.23',
    "last_5_games_change": 2
  },
  "IT": {
    "name": "Italy",
    "code": "IT",
    "country": true,
    "value": '6.1',
    "stock": '20.45',
    "last_5_games_change": 1
  },
  "MX": {
    "name": "Mexico",
    "code": "MX",
    "country": true,
    "value": '4.7',
    "stock": '18.19',
    "last_5_games_change": -2
  },
  "NL": {
    "name": "Netherlands",
    "code": "NL",
    "country": true,
    "value": '6.3',
    "stock": '23.78',
    "last_5_games_change": -15
  },
  "PY": {
    "name": "Paraguay",
    "code": "PY",
    "country": true,
    "value": '2.5',
    "stock": '12.23',
    "last_5_games_change": -7
  },
  "PT": {
    "name": "Portugal",
    "code": "PT",
    "country": true,
    "value": '7.1',
    "stock": '24.23',
    "last_5_games_change": 5
  },
  "ES": {
    "name": "Spain",
    "code": "ES",
    "country": true,
    "value": '6.2',
    "stock": '22.45',
    "last_5_games_change": -10
  },
  "SE": {
    "name": "Sweden",
    "code": "SE",
    "country": true,
    "value": '4.3',
    "stock": '17.35',
    "last_5_games_change": -4
  },
  "CH": {
    "name": "Switzerland",
    "code": "CH",
    "country": true,
    "value": '4.8',
    "stock": '18.96',
    "last_5_games_change": 4
  },
  "US": {
    "name": "USA",
    "code": "US",
    "country": true,
    "value": '5.4',
    "stock": '21.99',
    "last_5_games_change": -1
  },
  "UY": {
    "name": "Uruguay",
    "code": "UY",
    "country": true,
    "value": '5.9',
    "stock": '23.45',
    "last_5_games_change": 12
  },
};

var TeamsAPI = {
  "BR": [ 
  {
            "name": "Brazil",
            "code": "BR",
            "country": true,
            "value": '9.8',
            "stock": '28.14',
            "last_5_games_change": 22
         },
 {
            "name": "Flamengo",
            "code": "flamengo",
            "country": false,
            "value": '4.9',
            "stock": '19.84',
            "last_5_games_change": -3
         },
  {
            "name": "Botafogo",
            "code": "botafogo",
            "country": false,
            "value": '4.2',
            "stock": '17.93',
            "last_5_games_change": 8
         },
  {
            "name": "Vasco",
            "code": "vasco",
            "country": false,
            "value": '2.9',
            "stock": '12.45',
            "last_5_games_change": -16
         },
  {
            "name": "Fluminense",
            "code": "fluminense",
            "country": false,
            "value": '3.6',
            "stock": '15.93',
            "last_5_games_change": -2
         },
  {
            "name": "América Mineiro",
            "code": "america_mineiro",
            "country": false,
            "value": '0.8',
            "stock": '6.03',
            "last_5_games_change": -3
         },
 {
            "name": "Atlético Mineiro",
            "code": "atletico_mineiro",
            "country": false,
            "value": '5.1',
            "stock": '20.31',
            "last_5_games_change": 7
         },
  {
            "name": "Cruzeiro",
            "code": "cruzeiro",
            "country": false,
            "value": '3.6',
            "stock": '17.63',
            "last_5_games_change": 2
         },
  {
            "name": "Atlético Paranaense",
            "code": "atletico_paranaense",
            "country": false,
            "value": '4.0',
            "stock": '16.77',
            "last_5_games_change": 4
         },
  {
            "name": "Chapecoense",
            "code": "chapecoense",
            "country": false,
            "value": '2.8',
            "stock": '13.28',
            "last_5_games_change": 0
         },
  {
            "name": "Grêmio",
            "code": "gremio",
            "country": false,
            "value": '3.9',
            "stock": '16.70',
            "last_5_games_change": 3
         },
 {
            "name": "Internacional",
            "code": "internacional",
            "country": false,
            "value": '3.1',
            "stock": '14.25',
            "last_5_games_change": 2
         },
  {
            "name": "Figueirense",
            "code": "figueirense",
            "country": false,
            "value": '3.5',
            "stock": '15.12',
            "last_5_games_change": -2
         },
  {
            "name": "Corinthias",
            "code": "corinthias",
            "country": false,
            "value": '4.7',
            "stock": '19.01',
            "last_5_games_change": 0
         },
  {
            "name": "Santos",
            "code": "santos",
            "country": false,
            "value": '5.2',
            "stock": '21.03',
            "last_5_games_change": 9
         },
  {
            "name": "Palmeiras",
            "code": "palmeiras",
            "country": false,
            "value": '5.9',
            "stock": '22.13',
            "last_5_games_change": 3
         },
  {
            "name": "Ponte Preta",
            "code": "ponte_preta",
            "country": false,
            "value": '3.8',
            "stock": '16.67',
            "last_5_games_change": 3
         },
  {
            "name": "São Paulo",
            "code": "sao_paulo",
            "country": false,
            "value": '3.6',
            "stock": '15.48',
            "last_5_games_change": -3
         },
  {
            "name": "Vitória",
            "code": "vitoria",
            "country": false,
            "value": '1.8',
            "stock": '10.87',
            "last_5_games_change": 0
         },
  {
            "name": "Sport",
            "code": "sport",
            "country": false,
            "value": '2.0',
            "stock": '11.83',
            "last_5_games_change": 3
         },
  {
            "name": "Santa Cruz",
            "code": "santa_cruz",
            "country": false,
            "value": '2.0',
            "stock": '11.09',
            "last_5_games_change": -4
         },
  {
            "name": "Bahia",
            "code": "bahia",
            "country": false,
            "value": '1.9',
            "stock": '11.72',
            "last_5_games_change": 2
         },
  {
            "name": "Goiás",
            "code": "goias",
            "country": false,
            "value": '1.3',
            "stock": '10.57',
            "last_5_games_change": -4
         }
        ]
  };