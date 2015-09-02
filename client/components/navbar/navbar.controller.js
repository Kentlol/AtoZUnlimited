'use strict';

angular.module('jaySiteApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Vehicle Portfolio',
      'link': '/vehicle'
    },{
      'title': 'Stadium Portfolio',
      'link': '/stadiums'
    },{
      'title': 'Building Portfolio',
      'link': '/buildings'
    },{
      'title': 'Miscellaneous Portfolio',
      'link': '/miscellaneous'
    },{
      'title': 'Time Lapse',
      'link': '/time-lapse'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
