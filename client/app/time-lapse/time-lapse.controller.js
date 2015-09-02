'use strict';

angular.module('jaySiteApp')
  	.controller('TimeLapseCtrl',
        ['$scope', '$sce', '$timeout', function ($scope, $sce, $timeout) {
            var controller = this;
            controller.state = null;
            controller.API = null;
            controller.currentVideo = 0;

            controller.onPlayerReady = function(API) {
                controller.API = API;
            };
          

            controller.onCompleteVideo = function() {
                controller.isCompleted = true;
                controller.currentVideo++;
                if (controller.currentVideo >= controller.videos.length) {
                    controller.currentVideo = 0;
                }
                controller.setVideo(controller.currentVideo);
            };
 
            controller.videos = [{
                sources: [
                    {src: $sce.trustAsResourceUrl('http://res.cloudinary.com/lkdz9kjae/video/upload/v1440124273/video1_r6rxqf.mp4'), type: 'video/mp4'},
                    {src: $sce.trustAsResourceUrl('http://res.cloudinary.com/lkdz9kjae/video/upload/v1440124273/video1_r6rxqf.webm'), type: 'video/webm'}
                ]
            },{
                sources: [
                    {src: $sce.trustAsResourceUrl('http://res.cloudinary.com/lkdz9kjae/video/upload/v1440124278/video3_da6tri.mp4'), type: 'video/mp4'},
                    {src: $sce.trustAsResourceUrl('http://res.cloudinary.com/lkdz9kjae/video/upload/v1440124278/video3_da6tri.webm'), type: 'video/webm'}
                ]
            },{
                sources: [
                    {src: $sce.trustAsResourceUrl('http://res.cloudinary.com/lkdz9kjae/video/upload/ac_none/v1440124270/video5_qxkq1q.mp4'), type: 'video/mp4'},
                    {src: $sce.trustAsResourceUrl('http://res.cloudinary.com/lkdz9kjae/video/upload/ac_none/v1440124270/video5_qxkq1q.webm'), type: 'video/webm'}
                ]
	    }];

            controller.config = {
                preload: 'none',
                autoHide: false,
                autoHideTime: 3000,
                autoPlay: false,
                sources: controller.videos[0].sources,
                theme: {
                    url: 'http://www.videogular.com/styles/themes/default/latest/videogular.css'
                },
                plugins: {
                    poster: 'http://res.cloudinary.com/lkdz9kjae/image/upload/v1439924457/AtoZ_rty5xg.png',
                    controls: {
                        autoHide: true,
                        autoHideTime: 5000
                    }
		    
                }
            };

            controller.setVideo = function(index) {
                controller.API.stop();
                controller.currentVideo = index;
                controller.config.sources = controller.videos[index].sources;
                $timeout(controller.API.play.bind(controller.API), 100);
            };
        }]
    );
