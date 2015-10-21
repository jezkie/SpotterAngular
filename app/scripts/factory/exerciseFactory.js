(function() {
  'use strict';
  angular
    .module('spot')
    .service('ExerciseService', ExerciseService);

  var FIREBASE_URL = 'https://myspotter.firebaseio.com';

  function ExerciseService($firebaseArray, $firebaseObject) {
    var self = this;
    var ref = new Firebase(FIREBASE_URL);

    self.getExerciseById = getExerciseById;
    self.getExercises = getExercises;
    self.save = save;
    self.remove = remove;

    // Internal functions
    function getExerciseById(id) {
      return $firebaseObject(ref.child('exercises').child(id));
    }

    function getExercises() {
      return $firebaseArray(ref.child('exercises'));
    }

    function remove(id){
      var toRemoveObj = getExerciseById(id);
      toRemoveObj.$remove().then(function(ref) {}, onError);
    }

    var onError = function(err) {
      console.log("Error:", err);
    }

    function rootRef(){
      return ref;
    }

  }
})();
