'use strict';

angular.module('naokoPageApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.profiles = [
        {'site':'blog on blogger', 'url':'http://go-naoko.blogspot.com/'},
        {'site': 'linkedin', url:'https://www.linkedin.com/pub/naoko-reeves/14/939/9a6', 'class':'fa fa-linkedin-square'},
        {'site':'stackoverflow', 'url':'http://stackoverflow.com/users/965808/naoko', 'class':'fa fa-stack-overflow'},
        {'site':'github', 'url':'https://github.com/naoko', 'class':'fa fa-github'},
        {'site':'twitter', 'url':'https://twitter.com/naoko_reeves', 'class':'fa fa-twitter-square'}
    ];

    $scope.selectedProfile = function(row) {
        $scope.selectedRow = row;
    };

  });
