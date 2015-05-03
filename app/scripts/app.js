'use strict';

/**
 * @ngdoc overview
 * @name stockBotApp
 * @description
 * # stockBotApp
 *
 * Main module of the application.
 */
angular
  .module('stockBotApp', [
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/research');
    $stateProvider
      .state('research', {
        url: '/research',
        templateUrl: 'views/research.html',
        controller: 'ResearchCtrl'
      })
      .state('reseach.results', {
        url: '/results',
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
  });
