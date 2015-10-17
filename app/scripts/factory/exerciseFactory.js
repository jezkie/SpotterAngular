(function() {
  'use strict';
    var exerciseFactory = function($firebaseArray, $firebaseObject, $firebase) {
    var url = 'https://personalspotter.firebaseio.com/data/exercises';
    var ref = new Firebase(url);

    var getExerciseById = function(id) {
      var recordRef = new Firebase(url + '/' + id);
      return $firebaseObject(recordRef);
    };

    var getExercises = function() {
      return $firebaseArray(ref);
    };

    var save = function(toSaveObj){
      toSaveObj.$save().then(function(ref) {
        ref.key() === toSaveObj.$id; // true
      }, onError);
    };

    var remove = function(id){
      var toRemoveObj = getExerciseById(id);
      toRemoveObj.$remove().then(function(ref) {}, onError);
    };

    var onError = function(err) {
      console.log("Error:", err);
    };

    return {
      getExerciseById: getExerciseById,
      getExercises: getExercises,
      save: save,
      remove: remove
    };

  };

  var app = angular.module('spot');
  app.factory('exerciseFactory', exerciseFactory);
})();
