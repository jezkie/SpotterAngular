(function() {
  'use strict';

  var app = angular.module('spot');

  var ExerciseCtrl = function($scope, $stateParams, $interval) {

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        if (countDownInterval) {
          $interval.cancel(countDownInterval);
          $scope.countdown = 0;
        }
      }
    };

    var countDownInterval = null;
    var startCountdown = function() {
      countDownInterval = $interval(decrementCountdown, 1000);
    };

    $scope.finishSet = function() {
      $scope.countdown = $stateParams.rest;
      startCountdown();
    };

    $scope.name = $stateParams.exercise;
    $scope.countdown = 0;

  };

  app.controller('ExerciseCtrl', ExerciseCtrl);
})();
