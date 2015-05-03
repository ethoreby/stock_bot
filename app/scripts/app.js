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
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('research', {
        url: '/',
        templateUrl: 'views/research.html',
        
      })
  });
