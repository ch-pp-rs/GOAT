'use strict';

angular.module('goatApp')
  .controller('PlayerViewCtrl', function ($scope, playerService, $routeParams) {
    playerService.getPlayerByUrl($routeParams.id)
      .then(function (data) {
        $scope.player = data.results[0];
      });
  });
