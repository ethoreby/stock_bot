'use strict';

/**
 * @ngdoc function
 * @name stockBotApp.controller:ResearchCtrl
 * @description
 * # ResearchCtrl
 * Controller of the stockBotApp
 */
angular.module('stockBotApp')
  .controller('ResearchCtrl', function ($scope) {

    $scope.researchStocks = function() {
      console.log($scope.stocksInput);
    };
  });
