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
    var playerUrl = 'http://www.basketball-reference.com/players/j/jordami01.html';

    spyOn(location, 'path');

    scope.gotoPlayer(playerUrl);

    expect(location.path).toHaveBeenCalledWith('/player/' + playerUrl);
  });
});
