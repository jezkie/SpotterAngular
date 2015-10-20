(function() {
  'use strict';
  angular
    .module('spot')
    .service('ExerciseService', ExerciseService);

  var FIREBASE_URL = 'https://personalspotter.firebaseio.com/data/exercises';

  function ExerciseService($firebaseArray, $firebaseObject) {
    var self = this;
    var ref = new Firebase(FIREBASE_URL);

    self.getExerciseById = getExerciseById;
    self.getExercises = getExercises;
    self.save = save;
    self.remove = remove;

    // Internal functions

    function getExerciseById(id) {
      var recordRef = new Firebase(url + '/' + id);
      return $firebaseObject(recordRef);
    }

    function getExercises() {
      return $firebaseArray(ref);
    }

    function save(toSaveObj) {
      toSaveObj.$save().then(function(ref) {
        ref.key() === toSaveObj.$id; // true
      }, onError);
    }

    function remove(id) {
      var toRemoveObj = getExerciseById(id);
      toRemoveObj.$remove().then(function(ref) {
      }, onError);
    }

    function onError(err) {
      console.log("Error:", err);
    }
  }
})();
