'use strict';

angular.module('naokoPageApp')
  .controller('IndexCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });
