'use strict';

angular.module('jaySiteApp')
  .controller('MiscellaneousCtrl',['$scope','fgDelegate','Lightbox',function($scope, fgDelegate, Lightbox){
    $scope.message = 'Hello';
    $scope.images = [{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924469/misc1_oa7m2h.jpg',
      description: 'Yankee Stadium Concession Stand'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924505/misc2_ayvws3.jpg',
      description: 'MetLife Jets Locker Room'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924504/misc3_mfpc0b.jpg',
      description: 'Verizon Banner New York International Airport'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924504/misc4_sjb5le.jpg',
      description: 'SAP New York International Airport'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924468/misc5_krnc0z.jpg',
      description: 'Aflac New York Internation Airport'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924508/misc6_qaszyl.jpg',
      description: 'Fuel Cell Wrap 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924469/misc7_cyynyw.jpg',
      description: 'Rutgers University Concession'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924469/misc8_hzsuvu.jpg',
      description: 'Watch Column Wrap 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924506/misc9_cqdxzc.jpg',
      description: 'Watch Column Wrap 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924508/misc10_ehejn4.jpg',
      description: 'SNY Studio Doors'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924507/misc11_iwtbf5.jpg',
      description: 'Westfield Banner New York International Airport'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924470/misc12_loqxvc.jpg',
      description: 'Captain Morgan Bar Frame'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924470/misc13_jue6mq.jpg',
      description: 'Westfield Food Court New York International Airport'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924470/misc15_sg914w.jpg',
      description: 'Westfield Food Court Panel JFK Internationl'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924508/misc16_pvypfi.jpg',
      description: 'ATM Wrap'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924508/misc17_jn0wqm.jpg',
      description: 'Fuel Cell Wrap 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924471/misc18_dslb9w.jpg',
      description: 'Verizon Wall New York International Airport'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924471/misc19_jdccu8.jpg',
      description: 'Miscellaneous Mall Column Wrap'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924508/misc20_qaukys.jpg',
      description: 'Column Wrap New York International Airport'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924508/misc21_dotwwv.jpg',
      description: 'MetLife Superbowl Wall'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924508/misc22_rlqtv2.jpg',
      description: 'Newark International Airport Column 1/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924509/misc23_vts4mf.jpg',
      description: 'Newark International Airport Column 2/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924515/misc24_vwjzdt.jpg',
      description: 'Newark Internation Airport Column 3/3'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440085616/misc25_oof8y4.jpg',
      description: 'Prudential JFK International'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124214/misc26_gmu61s.jpg',
      description: 'Penn Station "Station Domination" Column Wrap 1/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124249/misc27_gwq7no.jpg',
      description: 'JFK International Banner'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124242/misc28_xkttqk.jpg',
      description: 'Penn Station "Station Domination" Column Wrap 2/2'
      },{
      url: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1440124244/misc29_izztvq.jpg',
      description: 'Adidas retail space banners.'
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
