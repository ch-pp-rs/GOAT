'use strict';

angular.module('goatApp')
  .service('playerService', function ($http, $q, IMPORTIO) {
    this.getAllPlayers = function () {
      var defer = $q.defer(),
        url = 'http%3A%2F%2Fwww.basketball-reference.com%2Ffriv%2Fratings.cgi',
        requestUrl = IMPORTIO.URL + IMPORTIO.PLAYERSAPIREF + url + '&_user=' + IMPORTIO.USERID + '&_apikey=' + IMPORTIO.APIKEY;

      $http({method: 'GET', url: requestUrl}).success(function (data) {
        defer.resolve(data);
      }).error(function (data, status) {
        defer.reject(status + ' | bad');
      });

      return defer.promise;
    };
    this.getPlayerByUrl = function (url) {
      var defer = $q.defer(),
        requestUrl = IMPORTIO.URL + IMPORTIO.PLAYERAPIREF + url + '&_user=' + IMPORTIO.USERID + '&_apikey=' + IMPORTIO.APIKEY;

      $http({method: 'GET', url: requestUrl}).success(function (data) {
        defer.resolve(data);
      }).error(function (data, status) {
        defer.reject(status + ' | bad');
      });

      return defer.promise;
    };
  });
