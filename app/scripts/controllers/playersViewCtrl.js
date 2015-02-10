'use strict';

angular.module('goatApp')
  .controller('PlayersViewCtrl', function ($scope, $location, playerService) {
    $scope.compare = [];
    
    playerService.getAllPlayers().
      then(function (data) {
        $scope.players = data.results;
      });

    $scope.gotoPlayer = function(playerUrl) {
      playerUrl = playerUrl.replace(':', '%3A');
      playerUrl = playerUrl.replace(/\//g, '%2F');

      $location.path('/player/' + playerUrl);
    };
    
    $scope.comparePlayer = function(playerUrl) {
      playerUrl = playerUrl.replace(':', '%3A');
      playerUrl = playerUrl.replace(/\//g, '%2F');
      
      playerService.getPlayerByUrl(playerUrl)
      .then(function (data) {
        $scope.compare.push(data.results[0]);
      });
    };
  });
