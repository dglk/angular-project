(function() {
  'use strict';
  angular.module('trainingProject').controller('MainCtrl', ['$translate',
    function($translate) {
    this.setLanguage = function(language) {
      $translate.use(language);
    }
  }])
})();
