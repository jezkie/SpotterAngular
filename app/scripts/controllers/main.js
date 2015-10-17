'use strict';

/**
 * @ngdoc function
 * @name angularWorkspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWorkspaceApp
 */
angular.module('spot')
  .controller('MainCtrl', function ($scope, $firebaseObject, $firebaseArray) {
    /*$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'SitePoint'
    ];*/

    var ref = new Firebase('https://personalspotter.firebaseio.com/data/exercises');

    $scope.awesomeThings = $firebaseArray(ref);
  });
