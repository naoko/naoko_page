'use strict';

angular.module('naokoPageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.profiles = [
        {'site':'blog on blogger', 'url':'http://go-naoko.blogspot.com/'},
        {'site':'stackoverflow', 'url':'http://stackoverflow.com/users/965808/naoko'},
        {'site':'github', 'url':'https://github.com/naoko'},
        {'site':'twitter', 'url':'https://twitter.com/naoko_reeves'},
    ];

    $scope.selectedProfile = function(row) {
        $scope.selectedRow = row;
    };
  });
