'use strict';

describe('Service: playerService', function () {

  // load the controller's module
  beforeEach(module('goatApp'));

  var playerS,
    httpMock,
    IO;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($httpBackend, IMPORTIO) {
    httpMock = $httpBackend;
    inject(function ($injector) {
      playerS = $injector.get('playerService');
    });
    IO = IMPORTIO;
  }));

  it('should return all players', function () {
    var promiseResult,
      url = 'http%3A%2F%2Fwww.basketball-reference.com%2Ffriv%2Fratings.cgi';

    httpMock.expectGET(IO.URL + IO.PLAYERSAPIREF + url + '&_user=' + IO.USERID + '&_apikey=' + IO.APIKEY).respond('test1');

    playerS.getAllPlayers().then(function (data) {
      promiseResult = data;
    });

    httpMock.flush();
    expect(promiseResult).toBe('test1');
  });

  it('should return a player', function () {
    var promiseResult,
      url = 'http%3A%2F%2Fwww.basketball-reference.com%2Fplayers%2Fb%2Fbirdla01.html';

    httpMock.expectGET(IO.URL + IO.PLAYERAPIREF + url + '&_user=' + IO.USERID + '&_apikey=' + IO.APIKEY).respond('test1');

    playerS.getPlayerByUrl(url).then(function (data) {
      promiseResult = data;
    });

    httpMock.flush();
    expect(promiseResult).toBe('test1');
  });
});
