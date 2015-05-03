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

    var baseUrl = "";

    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
