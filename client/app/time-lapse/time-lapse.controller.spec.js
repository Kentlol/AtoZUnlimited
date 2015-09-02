'use strict';

describe('Controller: TimeLapseCtrl', function () {

  // load the controller's module
  beforeEach(module('jaySiteApp'));

  var TimeLapseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimeLapseCtrl = $controller('TimeLapseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
