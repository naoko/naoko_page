'use strict';

angular.module('naokoPageApp')
  .controller('TodoCtrl', ['$scope', '$location', 'Todo',
        function ($scope, $location, Todo) {
            $scope.todo = new Todo({
                title: [ {} ]
            });

            $scope.save = function() {
                $location.path('/view/' + todo.id);
            }
  }]);
