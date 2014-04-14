'use strict';

angular.module('naokoPageApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/todo', {
            templateUrl: 'views/todo.html',
            controller: 'TodoCtrl'
      })
      .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
