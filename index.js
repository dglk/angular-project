var app = angular.module('FormValidation', []);

var MIN_AGE = 18;
var MAX_AGE = 65;
var INTEGER_REGEX = /^[1-9][0-9]*$/;
var WORD_REGEX = /^[a-zA-z]+$/;
var DATE_FORMAT = 'DD-MM-YYYY';

app.controller('UserPreferencesController', ['$scope', function($scope) {
}]);

app.directive('trString', function() {
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

app.directive('trInteger', function() {
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

app.directive('trDate', function() {
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
