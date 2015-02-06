'use strict';

angular.module('goatApp')
  .service('playerService', function ($http, IMPORTIO, $q) {
    this.getPlayerByUrl = function (url) {
      var defer = $q.defer(),
        requestUrl = IMPORTIO.URL + url + '&_user=' + IMPORTIO.USERID + '&_apikey=' + IMPORTIO.APIKEY;

      $http({method: 'GET', url: requestUrl}).success(function (data) {
        defer.resolve(data);
      }).error(function (data, status) {
        defer.reject(status + ' | bad');
      });

      return defer.promise;
    };
  });
