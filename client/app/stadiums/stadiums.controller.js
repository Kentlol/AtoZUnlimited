'use strict';

angular.module('jaySiteApp')
  .controller('StadiumsCtrl', ['$scope', 'fgDelegate', 'Lightbox', function ($scope, fgDelegate, Lightbox) {
    $scope.message = 'Hello';
    $scope.images = [{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924478/stadium5_chb8od.jpg',
      description: '"New York Yankees" "Budweiser" Home Run Wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924513/stadium6_dprupz.jpg',
      description: '"New York Yankees" Special Ops Home Run Wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924514/stadium7_u3v27b.jpg',
      description: '"New York Yankees" Column 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924515/stadium8_enh8ls.jpg',
      description: '"New York Yankees" Column 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924514/stadium9_yt7ual.jpg',
      description: '"New York Yankees" Home Plate 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924516/stadium10_wjcujf.jpg',
      description: '"New York Yankees" Home Plate 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924516/stadium11_uc8tz9.jpg',
      description: 'Fordham University 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924515/stadium12_mhjtdo.jpg',
      description: 'Fordham University 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924516/stadium13_tddmhs.jpg',
      description: '"New York Yankees" "State Farm" Home Run Wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924515/stadium1_fiioic.jpg',
      description: 'Madison Square Garden 1/4'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924478/stadium2_iysgup.jpg',
      description: 'Madison Square Garden 2/4'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924515/stadium3_utgoey.jpg',
      description: 'Madison Square Garden 3/4'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924478/stadium4_mpa29n.jpg',
      description: 'Madison Square Garden 4/4'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924516/stadium14_fpbhis.jpg',
      description: '"New York Yankees" Dugout Cover 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924516/stadium15_jrvndu.jpg',
      description: '"New York Yankees" Home Run Wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924518/stadium16_a7csqd.jpg',
      description: '"New York Mets" "Citi Field" Home Run Wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924522/stadium17_c4ecct.jpg',
      description: 'Jay Rockhill Yankees Legends Suite Install'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924524/stadium18_mega4w.jpg',
      description: '"New York Yankees" Dugout Cover 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924523/stadium19_rdjcth.jpg',
      description: '"New York Yankees" Home Run Wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924523/stadium20_r5k3oo.jpg',
      description: '"New York Yankees" 27 Billboard'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924521/stadium21_geh1dz.jpg',
      description: 'Stadium Entry Signs'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924522/stadium22_mwfm5s.jpg',
      description: '"Citi Field" Home Run Wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924517/stadium23_yy6ktr.jpg',
      description: 'River Ave. "Chien-Ming Wang" banner'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924522/stadium24_futequ.jpg',
      description: '"Yankee Stadium" banner'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124255/stadium35_zdqszp.jpg',
      description: 'MetLife SuperBowl Installation 1/5'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124255/stadium36_ueqv4u.jpg',
      description: 'MetLife SuperBowl Installation 2/5'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124256/stadium37_drncme.jpg',
      description: 'MetLife SuperBowl Installation 3/5'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124255/stadium38_zarsin.jpg',
      description: 'MetLife SuperBowl Installation 4/5'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124262/stadium39_v3udyp.jpg',
      description: 'MetLife SuperBowl Installation 5/5'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124256/stadium40_woags4.jpg',
      description: 'The Chapel School Gym Center Court'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124262/stadium41_ggsxun.jpg',
      description: 'Citi Field MLB Network'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124262/stadium42_gribkr.jpg',
      description: 'Citi Field Altec Lansing Home Run Wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124260/stadium43_nekxgr.jpg',
      description: 'Citi Field National Car Rental Home Run Wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124259/stadium44_qwuy3k.jpg',
      description: 'Citi Field Home Run wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440085617/stadium25_t2ozc8.jpg',
      description: '"New York Mets" "Budweiser" Home Run Wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440085616/stadium26_pxvulu.jpg',
      description: 'New York Jets MetLife Locker Room 1/5'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124245/stadium27_nvfvoa.jpg',
      description: 'Jay Rockhill, Bobby Fandel Citi Field Install 1/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124249/stadium28_vywu3k.jpg',
      description: 'Jay Rockhill, Bobby Fandel Citi Field Install 2/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124252/stadium29_jzvjqg.jpg',
      description: 'Jay Rockhill, Bobby Fandel Citi Field Install 3/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124248/stadium30_i0wkkh.jpg',
      description: 'Bobby Fandel Citi Field Install'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124249/stadium31_hflc9z.jpg',
      description: 'New York Jets MetLife Locker Room 2/5'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124251/stadium32_y3to8x.jpg',
      description: 'New York Jets MetLife Locker Room 3/5'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124251/stadium33_rnrfj9.jpg',
      description: 'New York Jets MetLife Locker Room 4/5'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124257/stadium34_qdvmib.jpg',
      description: 'New York Jets MetLife Locker Room 5/5'
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
