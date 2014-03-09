'use strict';

angular.module('naokoPageApp')
  .controller('MainCtrl', function ($scope) {
        $scope.profiles = [
            {'site':'blog', 'url':'http://go-naoko.blogspot.com/'},
            {'site':'stackoverflow', 'url':'http://stackoverflow.com/users/965808/naoko'},
            {'site':'github', 'url':'https://github.com/naoko'},
            {'site':'twitter', 'url':'https://twitter.com/naoko_reeves'},
        ]
  });
