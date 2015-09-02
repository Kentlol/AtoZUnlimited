'use strict';

angular.module('jaySiteApp')
  .controller('BuildingsCtrl', ['$scope', 'fgDelegate', 'Lightbox', function ($scope, fgDelegate, Lightbox) {
    $scope.message = 'Hello';
    $scope.images = [{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924496/building1_cmimtx.jpg',
      description: 'Bronx Bacardi Billboard'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924496/building2_qnr51q.jpg',
      description: 'The Residences at W New York 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924498/building3_ltlhwr.jpg',
      description: 'The Residences at W New York 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924500/building4_c9mfoa.jpg',
      description: 'Microsoft Stores Nationwide'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924458/building5_qii4qg.jpg',
      description: 'Fendi Billboard NYC International Airport'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924459/building6_fxqvpo.jpg',
      description: 'SAP Airport Billboard 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924497/building7_mwncq5.jpg',
      description: 'SAP Airport Billboard 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924497/building8_cz85w1.jpg',
      description: 'GAP Born To Fit Storefront 1/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924462/building9_cnqwle.jpg',
      description: 'GAP Born to Fit Storefront 2/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924497/building10_fuwbuc.jpg',
      description: 'GAP Born to Fit Storefront 3/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924462/building11_pxua4u.jpg',
      description: 'Monday Night Football Building Cover 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924497/building12_eqaugd.jpg',
      description: 'Monday Night Football Building Cover 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924498/building13_imzzxv.jpg',
      description: 'Hallmark NYC International Airport'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924463/building14_mrylis.jpg',
      description: 'GAP Storefront 1/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924498/building15_j9dwau.jpg',
      description: 'GAP Storefront 2/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924463/building16_holzzx.jpg',
      description: 'GAP Storefront 3/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924499/building17_h7zyne.jpg',
      description: 'Pinstripe Bowl Interior Column Wrap'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924499/building18_jex9yw.jpg',
      description: 'LIU Building Wrap'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924501/building19_bxzyeg.jpg',
      description: 'SNY Building Cover'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924464/building20_bo0l5j.jpg',
      description: 'SAP Porsche New York International Airport'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124226/building24_a8v9a2.jpg',
      description: 'Pfizer Own it Building Decal'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124199/building25_gplfqo.jpg',
      description: 'IBM Wall JFK International Airport'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124200/building26_kdwcck.jpg',
      description: 'Microsoft Stores Nationwide'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440085613/building21_je4rxh.jpg',
      description: 'Bloomindales NYC'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440085614/building22_mgkaub.jpg',
      description: 'Memorial Sloan Kettering Cancer Center'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440085619/building23_iidni2.jpg',
      description: 'SAP NFL JFK International Airport'
      }
];

    $scope.updateGrid = function(){
      var vehiclePageGrid = fgDelegate.getFlow('vehiclePageGrid');

      vehiclePageGrid.minItemWidth += 20;
      vehiclePageGrid.refill(true);
    };

    $scope.openLightboxModal = function (index) {
      Lightbox.openModal($scope.images, index);
    };

  }]);
