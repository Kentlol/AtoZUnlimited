'use strict';

angular.module('jaySiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('time-lapse', {
        url: '/time-lapse',
        templateUrl: 'app/time-lapse/time-lapse.html',
        controller: 'TimeLapseCtrl'
      });
  });