'use strict';

/**
 * @ngdoc service
 * @name stockBotApp.financialsService
 * @description
 * # financialsService
 * Factory in the stockBotApp.
 */
angular.module('stockBotApp')
  .factory('financialsService', function ($http, ApiKey) {

    var baseUrl = 'https://sec.kimonolabs.com/';
    var baseArgs = { apikey: ApiKey.key }

    return {
      getFinancials: function(symbol) {
        symbol = symbol.toUpperCase();
        return $http.get(baseUrl + 'companies/' + symbol + '/forms/10-K/ANN', baseArgs);
      }
    };
  });
