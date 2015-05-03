'use strict';

describe('Service: financials', function () {

  // load the service's module
  beforeEach(module('stockBotApp'));

  // instantiate service
  var financials;
  beforeEach(inject(function (_financials_) {
    financials = _financials_;
  }));

  it('should do something', function () {
    expect(!!financials).toBe(true);
  });

});
