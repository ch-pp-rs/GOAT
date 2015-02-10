'use strict';

describe('Controller: PlayerViewCtrl', function () {

  // load the controller's module
  beforeEach(function () {
    module('goatApp');
  });

  var PlayerViewCtrl,
    scope,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location, playerService, $q) {
    scope = $rootScope.$new();
    location = $location;

    spyOn(playerService, 'getPlayerByUrl').and.callFake(
      function() {
        var deferred = $q.defer();
        deferred.resolve({results: [{name: 'Michael Jordan'}]});
        return deferred.promise;
      });
    spyOn(playerService, 'getAllPlayers').and.callFake(
      function() {
        var deferred = $q.defer();
        deferred.resolve({results: [{name: 'Michael Jordan'}, {name: 'Magic'}, {name: 'Shaq'}]});
        return deferred.promise;
      });

    PlayerViewCtrl = $controller('PlayersViewCtrl', {
      $scope: scope
    });
  }));

  it('should load all players', function () {
    scope.$root.$digest();

    expect(scope.players.length).toBe(3);
  });

  it('should navigate to player view on click', function () {
    var playerUrl = 'http://www.basketball-reference.com/players/j/jordami01.html',
      mockPlayerUrl = 'http%3A%2F%2Fwww.basketball-reference.com%2Fplayers%2Fj%2Fjordami01.html';

    spyOn(location, 'path');

    scope.gotoPlayer(playerUrl);

    expect(location.path).toHaveBeenCalledWith('/player/' + mockPlayerUrl);
  });

  it('should add player to compare list', function () {
    var playerUrl = 'http://www.basketball-reference.com/players/j/jordami01.html';

    scope.comparePlayer(playerUrl);

    scope.$root.$digest();

    expect(scope.compare.length).toBe(1);
  });

  it('should add 2 players to compare list', function () {
    var playerUrl = 'http://www.basketball-reference.com/players/j/jordami01.html';

    scope.compare = [{name: 'Magic'}];

    scope.comparePlayer(playerUrl);

    scope.$root.$digest();

    expect(scope.compare.length).toBe(2);
  });

});
