'use strict';

angular.module('myApp.integers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/integers', {
    templateUrl: 'integers/integers.html',
    controller: 'integersCtrl'
  });
}])

.controller('integersCtrl', ['$scope', function($scope) {
  
}]);