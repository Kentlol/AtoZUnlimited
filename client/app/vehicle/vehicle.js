'use strict';

angular.module('jaySiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vehicle', {
        url: '/vehicle',
        templateUrl: 'app/vehicle/vehicle.html',
        controller: 'VehicleCtrl'
      });
  });