(function() {
  'use strict';

  var app = angular.module('spot');

  var HomeCtrl = function($scope, exerciseFactory) {

    $scope.data = {
      name: null,
      rest: null
    };

    var clearForm = function() {
      $scope.data.name = null;
      $scope.data.rest = null;
    };

    var updateForm = function(model) {
      $scope.data.rest = model.rest;
      $scope.data.name = model.name;
    };

    var updateModel = function(model, form) {
      model.name = $scope.data.name;
      model.rest = $scope.data.rest;
      return model;
    };

    var recId = null;
    $scope.edit = function(id) {
      recId = id;
      var oldObj = $scope.exercises.$getRecord(id);
      updateForm(oldObj);
      console.log('Old object', oldObj);
    };

    $scope.exercises = exerciseFactory.getExercises();

    $scope.remove = function(id) {
      exerciseFactory.remove(id);
    };

    $scope.submit = function() {
      if (recId) {
        var toSaveObj = exerciseFactory.getExerciseById(recId);
        exerciseFactory.save(updateModel(toSaveObj, $scope.data));
        recId = null;
      } else {
        $scope.exercises.$add($scope.data);
      }
      clearForm();
    }

  };

  app.controller('HomeCtrl', HomeCtrl);

})();
