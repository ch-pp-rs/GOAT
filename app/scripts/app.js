'use strict';

angular
  .module('goatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('IMPORTIO', {
    'URL': 'https://api.import.io/store/data/3778ed62-ef7a-4ea6-9455-a8551493f89b/_query?input/webpage/url=',
    'USERID': '230f0767-e7bd-4ad4-9baa-74dc80613241',
    'APIKEY': 'wIDcWcrO5vJYa8gwNts4BR70jr5mJ8epMgn69oGzRhJ3HslbERk0E8Fpq3CWmbay38uwQbZ4JZ%2B0GjHXFBZOgg%3D%3D'
  });

