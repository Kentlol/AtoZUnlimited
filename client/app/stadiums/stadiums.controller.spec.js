'use strict';

describe('Controller: StadiumsCtrl', function () {

  // load the controller's module
  beforeEach(module('jaySiteApp'));

  var StadiumsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StadiumsCtrl = $controller('StadiumsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
