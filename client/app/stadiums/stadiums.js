'use strict';

angular.module('jaySiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stadiums', {
        url: '/stadiums',
        templateUrl: 'app/stadiums/stadiums.html',
        controller: 'StadiumsCtrl'
      });
  });