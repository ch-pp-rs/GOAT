'use strict';

angular.module('goatApp')
  .controller('PlayersViewCtrl', function ($scope, playerService, $location) {
    playerService.getAllPlayers().
      then(function (data) {
        $scope.players = data.results;
      });

    $scope.gotoPlayer = function(playerUrl) {
      playerUrl = playerUrl.replace(':', '%3A');
      playerUrl = playerUrl.replace(/\//g, '%2F');

      $location.path('/player/' + playerUrl);
    };
  });
