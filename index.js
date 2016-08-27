(function() {
  'use strict';
  angular.module('trainingProject', ['ui.router', 'ui.bootstrap',
    'pascalprecht.translate']);

  angular.module('trainingProject').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'app/templates/main.tpl.html',
      controller: 'MainCtrl',
      controllerAs: 'vm'
    }).state('main.profile', {
      url: 'profile',
      templateUrl: 'app/templates/profile.tpl.html'
    });
  });

  angular.module('trainingProject').config(function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'lang/lang-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
  });

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['trainingProject']);
  });
})();
