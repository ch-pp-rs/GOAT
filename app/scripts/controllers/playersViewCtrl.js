'use strict';

angular.module('goatApp')
  .controller('PlayersViewCtrl', function ($scope, playerService, $location) {
    playerService.getAllPlayers().
      then(function (data) {
        $scope.players = data.results;
      });

    $scope.gotoPlayer = function(playerUrl) {
      console.log(playerUrl);

      $location.path('/player/' + playerUrl);
    };
  });
