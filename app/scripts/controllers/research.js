'use strict';

/**
 * @ngdoc function
 * @name stockBotApp.controller:ResearchCtrl
 * @description
 * # ResearchCtrl
 * Controller of the stockBotApp
 */
angular.module('stockBotApp')
  .controller('ResearchCtrl', function ($scope, financialsService) {

    $scope.researchStocks = function() {
      financialsService.getFinancials('aal').then(function(rsp) {
        console.log(rsp);
      },
      function(err) {
        console.log(err);
      });
    };
  });
