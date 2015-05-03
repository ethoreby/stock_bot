'use strict';

/**
 * @ngdoc service
 * @name stockBotApp.financialsService
 * @description
 * # financialsService
 * Factory in the stockBotApp.
 */
angular.module('stockBotApp')
  .factory('financialsService', function ($http) {

    var baseUrl = 'https://sec.kimonolabs.com/';
    var baseArgs = { apikey: '' }

    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
