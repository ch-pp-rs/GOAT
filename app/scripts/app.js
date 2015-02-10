'use strict';

angular
  .module('goatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/players.html',
        controller: 'PlayersViewCtrl'
      })
      .when('/player/:id', {
        templateUrl: '../views/playerView.html',
        controller: 'PlayerViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('IMPORTIO', {
    'URL': 'https://api.import.io/store/data/',
    'PLAYERAPIREF': '3778ed62-ef7a-4ea6-9455-a8551493f89b/_query?input/webpage/url=',
    'PLAYERSAPIREF': 'bc43c41d-b6fe-4afe-b876-8b783800e8b7/_query?input/webpage/url=',
    'USERID': '230f0767-e7bd-4ad4-9baa-74dc80613241',
    'APIKEY': 'wIDcWcrO5vJYa8gwNts4BR70jr5mJ8epMgn69oGzRhJ3HslbERk0E8Fpq3CWmbay38uwQbZ4JZ%2B0GjHXFBZOgg%3D%3D'
  });

