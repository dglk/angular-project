(function() {
  'use strict';
  angular.module('trainingProject', ['ui.router']);

  angular.module('trainingProject').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'app/templates/main.tpl.html'
    }).state('main.profile', {
      url: 'profile',
      templateUrl: 'app/templates/profile.tpl.html'
    });
  });

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['trainingProject']);
  });
})();
