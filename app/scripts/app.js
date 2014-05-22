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
      .when('/cool', {
            templateUrl: 'views/cool.html',
            controller: 'CoolCtrl'
      })
      .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
