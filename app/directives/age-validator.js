(function() {
  'use strict';
  var MIN_AGE = 18,
      MAX_AGE = 65,
      INTEGER_REGEX = /^[1-9][0-9]*$/;;

  angular.module('TrainingProject').directive('ageValidator', function() {
    return {
      require: 'ngModel',
      link: function($scope, $element, $attrs, $controller) {
        $controller.$validators.integer = function(modelValue, viewValue) {
          if ($controller.$isEmpty(modelValue)) {
            return true;
          };

          return INTEGER_REGEX.test(modelValue);
        };

        $controller.$validators.correctRange = function(modelValue, viewValue) {
          if ($controller.$isEmpty(modelValue)) {
            return false;
          };

        var number = Number.parseInt(modelValue);
          return (modelValue >= MIN_AGE) && (modelValue <= MAX_AGE);
        }
      }
    }
  });
})();
