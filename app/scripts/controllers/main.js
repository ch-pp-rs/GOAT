'use strict';

angular.module('goatApp')
  .controller('MainCtrl', function ($scope, playerService) {
    playerService.getPlayerByUrl('http%3A%2F%2Fwww.basketball-reference.com%2Fplayers%2Fb%2Fbirdla01.html').
      then(function (data) {
        $scope.player = data.data.results[0];
      });
  });
