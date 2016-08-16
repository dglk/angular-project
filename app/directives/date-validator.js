(function() {
  'use strict';
  var DATE_FORMAT = 'DD-MM-YYYY';

  angular.module('TrainingProject').directive('dateValidator', function() {
    return {
      require: 'ngModel',
      link: function($scope, $element, $attrs, $controller) {
        $controller.$validators.date = function(modelValue, viewValue) {
          if ($controller.$isEmpty(modelValue)) {
            return false;
          };

          return moment(modelValue, DATE_FORMAT, true).isValid();
        }
      }
    }
  });
})();
