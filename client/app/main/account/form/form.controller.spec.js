'use strict';

describe('Controller: AccountFormController', function () {

  // load the controller's module
  beforeEach(module('petzApp'));

  var sut, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    sut = $controller('AccountFormController', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
