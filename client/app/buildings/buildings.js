'use strict';

angular.module('jaySiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('buildings', {
        url: '/buildings',
        templateUrl: 'app/buildings/buildings.html',
        controller: 'BuildingsCtrl'
      });
  });