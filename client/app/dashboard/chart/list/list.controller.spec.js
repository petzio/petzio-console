'use strict';

describe('Controller: ChartListController', function () {

  // load the controller's module
  beforeEach(module('petzApp'));

  var sut, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    sut = $controller('ChartListController', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
