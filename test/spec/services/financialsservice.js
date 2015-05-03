'use strict';

describe('Service: financialsService', function () {

  // load the service's module
  beforeEach(module('stockBotApp'));

  // instantiate service
  var financialsService;
  beforeEach(inject(function (_financialsService_) {
    financialsService = _financialsService_;
  }));

  it('should do something', function () {
    expect(!!financialsService).toBe(true);
  });

});
