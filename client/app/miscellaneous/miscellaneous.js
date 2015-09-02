'use strict';

angular.module('jaySiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('miscellaneous', {
        url: '/miscellaneous',
        templateUrl: 'app/miscellaneous/miscellaneous.html',
        controller: 'MiscellaneousCtrl'
      });
  });