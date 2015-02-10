'use strict';

describe('Controller: PlayerViewCtrl', function () {

  // load the controller's module
  beforeEach(module('goatApp'));

  var PlayerViewCtrl,
    scope,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    PlayerViewCtrl = $controller('PlayersViewCtrl', {
      $scope: scope
    });
  }));

  it('should navigate to player view on click', function () {
    var playerUrl = 'http://www.basketball-reference.com/players/j/jordami01.html',
      mockPlayerUrl = 'http%3A%2F%2Fwww.basketball-reference.com%2Fplayers%2Fj%2Fjordami01.html';

    spyOn(location, 'path');

    scope.gotoPlayer(playerUrl);

    expect(location.path).toHaveBeenCalledWith('/player/' + mockPlayerUrl);
  });
  
  it('should add player to compare list', function () {
    var playerUrl = 'http://www.basketball-reference.com/players/j/jordami01.html',
      mockPlayerUrl = 'http%3A%2F%2Fwww.basketball-reference.com%2Fplayers%2Fj%2Fjordami01.html';

    scope.comparePlayer(playerUrl);

    expect(scope.compare.length).toBe(1);
  });
});
