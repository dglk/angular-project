(function() {
  'use strict';
  var WORD_REGEX = /^[a-zA-z]+$/;

  angular.module('TrainingProject').directive('usernameValidator', function() {
    return {
      require: 'ngModel',
      link: function($scope, $element, $attrs, $controller) {
        $controller.$validators.short = function(modelValue, viewValue) {
          if ($controller.$isEmpty(modelValue)) {
            return false;
          };

          return (modelValue.length >= 3);
        };
        $controller.$validators.firstUppercase = function(modelValue, viewValue) {
          if ($controller.$isEmpty(modelValue)) {
            return false;
          };

          return modelValue.charAt(0) !== modelValue.charAt(0).toLowerCase();
        };
        $controller.$validators.lettersOnly = function(modelValue, viewValue) {
          if ($controller.$isEmpty(modelValue)) {
            return true;
          };

          return WORD_REGEX.test(modelValue);
        };
      }
    }
  });
})();
