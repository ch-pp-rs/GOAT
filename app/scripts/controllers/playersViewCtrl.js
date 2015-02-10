'use strict';

angular.module('goatApp')
  .controller('PlayersViewCtrl', function ($scope, $location, playerService, ngDialog) {
    $scope.compare = [];

    playerService.getAllPlayers().
      then(function (data) {
        $scope.players = data.results;
      });

    $scope.gotoPlayer = function (playerUrl) {
      playerUrl = playerUrl.replace(':', '%3A');
      playerUrl = playerUrl.replace(/\//g, '%2F');

      $location.path('/player/' + playerUrl);
    };

    $scope.replacePlayer = function (arrayIndex, playerUrl) {
      $scope.compare.splice(arrayIndex, 1);
      $scope.comparePlayer(playerUrl);
    };

    $scope.comparePlayer = function (playerUrl) {
      playerUrl = playerUrl.replace(':', '%3A');
      playerUrl = playerUrl.replace(/\//g, '%2F');

      if ($scope.compare.length === 2) {
        var dialog = ngDialog.open({
          template: '/views/compareConfirmModel.html',
          scope: $scope,
          className: 'ngdialog-theme-default compare-confirm'
        });

        dialog.closePromise.then(function (data) {
          if (data.value > -1) {
            $scope.replacePlayer(data.value, playerUrl);
          }
        });
      } else {
        playerService.getPlayerByUrl(playerUrl).then(function (data) {
          $scope.compare.push(data.results[0]);
        });
      }
    };
  });
