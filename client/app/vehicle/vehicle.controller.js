'use strict';

angular.module('jaySiteApp')
  .controller('VehicleCtrl', ['$scope','fgDelegate', 'Lightbox', function ($scope, fgDelegate, Lightbox){
  
    $scope.message = 'Hello';
    $scope.images = [{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924457/Beaches_vt3mqr.jpg',
      description: 'Sandals Resort 1/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924477/Sandals_abekhw.jpg',
      description: 'Sandals Resort 2/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924458/Beaches-Sandals_izxufn.jpg',
      description: 'Sandals Resort 3/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924495/BlueChair_ydjh1b.jpg',
      description: 'Blue Chair Truck Wrap'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924500/Glad1_ujoxqa.jpg',
      description: 'Glad Truck Wrap 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924466/Glad2_wofpza.jpg',
      description: 'Glad Truck Wrap 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924502/Hinn1_syozet.jpg',
      description: 'Holiday Inn 1/6'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924466/Hinn2_lvhcvf.jpg',
      description: 'Holiday Inn 2/6'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924503/Hinn3_oczher.jpg',
      description: 'Holiday Inn 3/6'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924467/Hinn4_suufmn.jpg',
      description: 'Holiday Inn 4/6'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924503/Hinn5_i5nybs.jpg',
      description: 'Holiday Inn 5/6'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924503/Hinn6_qq5rrs.jpg',
      description: 'Holiday Inn 6/6'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924472/m_m_gpqhy6.jpg',
      description: 'M&M Vehicle Wrap Vinyl'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924477/snickers_p3gmnr.jpg',
      description: 'Snickers Vehicle Wrap Vinyl'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924515/doublemint_lbdcy3.jpg',
      description: 'Doublemint Vehicle Wrap Vinyl'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924475/photo2_cot6pc.jpg',
      description: 'VW Zamboni Wrap 1/2 New York Rangers'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924511/photo3_fd8hc3.jpg',
      description: 'VW Zamboni Wrap 2/2 New York Rangers'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924512/Popchips_jpu7g5.jpg',
      description: 'Popchips Truck Wrap'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924467/Klove1_mvryka.jpg',
      description: 'K-love Radio 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924468/Klove2_gb88rl.jpg',
      description: 'K-love Radio 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924475/RadioDisney_saplzc.jpg',
      description: 'Radio Disney 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924512/RadioDisney2_c25ktc.jpg',
      description: 'Radio Disney 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924528/Yogo_cm92xu.jpg',
      description: 'Yogo Truck Wrap'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924524/TopShop_wi8tnn.jpg',
      description: 'TopShop Truck Wrap'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924503/Mercury1_nnvy0f.jpg',
      description: 'Mercury 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924467/Mercury2_jtaply.jpg',
      description: 'Mercury 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924523/StateFarm_hltl2y.jpg',
      description: 'State Farm Insurance 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124263/State_Farm_2_ah0sje.jpg',
      description: 'State Farm Insurance 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124215/garage_aiusos.jpg',
      description: 'Garage Gurus'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124240/mac_hd3n71.jpg',
      description: 'Mac Tools Truck Wrap'
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


