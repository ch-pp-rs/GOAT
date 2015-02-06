'use strict';

describe('Controller: PlayerViewCtrl', function () {

  // load the controller's module
  beforeEach(module('goatApp'));

  var PlayerViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerViewCtrl = $controller('PlayerViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
